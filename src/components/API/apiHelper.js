import axios from 'axios';

const localUrl = 'http://192.168.2.20/api';
const mainUrl = 'http://77.235.25.68/api';

const AUTH = {
    username: 'prosmotr',
    password: '123456789',
};

function getBaseUrl() {
    const isLocal =
        typeof window !== 'undefined' &&
        ['localhost', '127.0.0.1', '77.235.25.68'].includes(window.location.hostname);

    return isLocal ? localUrl : mainUrl;
}

export default async function getComputerList() {
    const base = getBaseUrl();

    try {
        // --- 1. Группы ---
        let groupsRes = await axios.get(`${base}/hostgroups`, { auth: AUTH });
        let groups = groupsRes.data?.result || [];
        groups = groups.filter((g) => g.isDeleted !== true);

        // --- 2. Хосты ---
        let hostsRes = await axios.get(`${base}/hosts`, { auth: AUTH });
        let hosts = hostsRes.data?.result || [];
        hosts = hosts.filter((h) => h.isDeleted !== true);

        // --- 3. Активные сессии ---
        const sessionsRes = await axios.get(`${base}/usersessions/active`, {
            auth: AUTH,
        });
        const sessions = sessionsRes.data?.result || [];

        // --- 4. Балансы ---
        const balanceRes = await axios.get(`${base}/users/balance`, { auth: AUTH });
        const balances = balanceRes.data?.result || [];

        // MAP-lookup
        const sessionByHost = {};
        const balanceByUser = {};

        sessions.forEach((s) => {
            sessionByHost[s.hostId] = s;
        });

        balances.forEach((b) => {
            balanceByUser[b.userId] = {
                ...b,
                remainingMinutes: b.availableTime ?? 0,
            };
        });

        // --- создаём карту групп ---
        const groupsMap = {};
        groups.forEach((g) => {
            groupsMap[g.id] = { ...g, computers: [] };
        });

        // Группа "Без группы"
        groupsMap['none'] = {
            id: 'none',
            name: 'Без группы',
            computers: [],
        };

        // --- перекладываем компьютеры + добавляем сессию + баланс ---
        const computerList = hosts.map((h) => {
            const groupId = h.hostGroupId || 'none';

            const activeSession = sessionByHost[h.id] || null;

            let sessionWithBalance = null;

            if (activeSession) {
                const bal = balanceByUser[activeSession.userId] || null;

                sessionWithBalance = {
                    ...activeSession,
                    userBalance: bal,
                    remainingMinutes: bal?.remainingMinutes ?? 0, // <<< кладём сюда
                };
            }

            const data = {
                ...h,
                activeSession: sessionWithBalance,
            };

            return data;
        });

        const computerListSorted = computerList.sort((a, b) => a.number - b.number);

        return computerListSorted;
    } catch (err) {
        console.error('Ошибка Gizmo API:', err);
        return { error: true, message: err.message };
    }
}
