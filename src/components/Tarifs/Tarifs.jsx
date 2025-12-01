import './style.scss';

const Tarifs = () => {
    const tarifsComputer = [
        {
            package: '1 час',
            comfort: '90 сом',
            comfortPlus: '100 сом',
            vip: '130 сом',
            premium: '170 сом',
        },
        {
            package: '3 часа',
            comfort: '250 сом',
            comfortPlus: '270 сом',
            vip: '380 сом',
            premium: '480 сом',
        },
        {
            package: '5 часов',
            comfort: '350 сом',
            comfortPlus: '370 сом',
            vip: '500 сом',
            premium: '650 сом',
        },
        {
            package: '7 часов',
            comfort: '450 сом',
            comfortPlus: '470 сом',
            vip: '650 сом',
            premium: '720 сом',
        },
        {
            package: 'Ночь',
            comfort: '350 сом',
            comfortPlus: '370 сом',
            vip: '600 сом',
            premium: '700 сом',
        },
    ];

    return (
        <div className="tarifs-container">
            <div className="tarifTitle">ПРАЙС ЛИСТ</div>

            <table className="tarif-table">
                <thead>
                    <tr>
                        <th className="th-time">
                            <div className="timeDiv">ВРЕМЯ</div>
                        </th>
                        <th className="th-comfort">
                            <div className="blackTitle">COMFORT</div>
                        </th>
                        <th className="th-comfort-plus">
                            <div className="blackTitle">COMFORT+</div>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {tarifsComputer.map((item, index) => (
                        <tr key={index}>
                            <td className="td-time">
                                <div>{item.package}</div>
                            </td>
                            <td className="td-comfort">
                                <div>{item.comfort}</div>
                            </td>
                            <td className="td-comfort-plus">
                                <div>{item.comfortPlus}</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="tarif-table">
                <thead>
                    <tr>
                        <th className="th-time">
                            <div className="timeDiv">ВРЕМЯ</div>
                        </th>
                        <th className="th-vip">
                            <div className="blackTitle">VIP</div>
                        </th>
                        <th className="th-premium">
                            <div className="blackTitle">PREMIUM</div>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {tarifsComputer.map((item, index) => (
                        <tr key={index}>
                            <td className="td-time">
                                <div>{item.package}</div>
                            </td>
                            <td className="td-vip">
                                <div>{item.vip}</div>
                            </td>
                            <td className="td-premium">
                                <div>{item.premium}</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tarifs;
