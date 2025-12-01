import React, { useState } from 'react';
import './style.scss';
import { lockIcon } from '../icons/lockIcon';

const PcItem = ({ pc }) => {
    const blocked = pc.state === 2; // 🔒 вычисляем напрямую
    const session = pc.activeSession || null;

    let backgroundColor = 'rgb(0, 176, 80)'; // по умолчанию свободен
    let bron = 'rgb(0, 123, 255)';
    let displayTime = null;

    const pwhite = '#fff';
    const pblack = '#000';

    let textColor = pblack;

    if (blocked) {
        backgroundColor = bron;
        textColor = pwhite;
    } else if (session) {
        let remainingSeconds =
            session.remainingMinutes !== 0 ? session.remainingMinutes : 12 * 60 * 60;

        let remainingMinutes = Math.floor(remainingSeconds / 60);

        if (remainingMinutes < 1) remainingMinutes = '< 1';

        const hours = Math.floor(remainingMinutes / 60);
        const minutes = remainingMinutes % 60;

        displayTime = `${hours}ч ${minutes}мин`;

        if (remainingMinutes === '< 1' || remainingMinutes <= 30) {
            backgroundColor = '#ffcc00'; // желтый
            textColor = pblack;
        } else {
            backgroundColor = 'rgb(124, 30, 30)'; // занят
            textColor = pwhite;
        }
    }

    return (
        <div className="pcItem" style={{ backgroundColor, position: 'relative' }}>
            <p style={{ color: textColor, fontSize: 42, fontWeight: 800 }}>{pc.number}</p>

            {session && !blocked && (
                <p className="timeLeft" style={{ color: textColor }}>
                    {displayTime ? displayTime : '∞'}
                </p>
            )}

            {blocked && <div>{lockIcon}</div>}
        </div>
    );
};

export default PcItem;
