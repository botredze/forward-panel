import './style.scss';
import PcItem from '../../PcItem/PcItem';

const Vip = ({ psList }) => {
    const group1 = psList.filter((pc) => pc.number >= 73 && pc.number <= 74);
    const group2 = psList.filter((pc) => pc.number >= 75 && pc.number <= 80).reverse();
    const group3 = psList.filter((pc) => pc.number >= 81 && pc.number <= 86);
    const group4 = psList.filter((pc) => pc.number >= 87 && pc.number <= 93).reverse();

    return (
        <div className="vipMain">
            <div className="titleVip">
                <h3>VIP ЗАЛ</h3>
            </div>

            <div className="vipMain_inner">
                <div className="computerRad">
                    {group4.map((pc) => (
                        <PcItem key={pc.number} pc={pc} />
                    ))}
                </div>

                <div className="seredina">
                    <div className="computerRad">
                        {group3.map((pc) => (
                            <PcItem key={pc.number} pc={pc} />
                        ))}
                    </div>

                    <div className="computerRad">
                        {group2.map((pc) => (
                            <PcItem key={pc.number} pc={pc} />
                        ))}
                    </div>
                </div>

                <div className="computerRad toTop">
                    {group1.map((pc) => (
                        <PcItem key={pc.number} pc={pc} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Vip;
