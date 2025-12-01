import './style.scss';
import PcItem from '../../PcItem/PcItem';

const StandartComfort = ({ psList }) => {
    const group1 = psList.filter((pc) => pc.number >= 1 && pc.number <= 5).reverse();
    const group2 = psList.filter((pc) => pc.number >= 6 && pc.number <= 6);
    const group3 = psList.filter((pc) => pc.number >= 7 && pc.number <= 11);
    const group4 = psList.filter((pc) => pc.number >= 12 && pc.number <= 13).reverse();
    const group5 = psList.filter((pc) => pc.number >= 14 && pc.number <= 19).reverse();

    console.log(group1, 'group1');
    return (
        <div className="standartComfort">
            <div className="titleComfort">
                <h3>КОМФОРТ ЗАЛ</h3>
            </div>
            <div className="standartComfort_inner">
                <div className="secondLine">
                    <div className="secondLine_inner">
                        {group5.map((pc) => (
                            <PcItem key={pc.number} pc={pc} />
                        ))}
                    </div>

                    <div className="vnuntr">
                        {group4.map((pc) => (
                            <PcItem key={pc.number} pc={pc} />
                        ))}
                    </div>
                </div>

                <div className="standartComfortRow">
                    <div className="otdelno">
                        {group2.map((pc) => (
                            <PcItem key={pc.number} pc={pc} />
                        ))}
                    </div>
                    <div className="row_inner">
                        <div>
                            {group3.map((pc) => (
                                <PcItem key={pc.number} pc={pc} />
                            ))}
                        </div>

                        <div>
                            {group1.map((pc) => (
                                <PcItem key={pc.number} pc={pc} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StandartComfort;
