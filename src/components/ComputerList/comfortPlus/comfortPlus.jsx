import './style.scss';
import PcItem from '../../PcItem/PcItem';

const ComfortPlus = ({ psList }) => {
    const group1 = psList.filter((pc) => pc.number >= 44 && pc.number <= 48).reverse();
    const group2 = psList.filter((pc) => pc.number >= 49 && pc.number <= 52).reverse();
    const group3 = psList.filter((pc) => pc.number >= 53 && pc.number <= 60);
    const group4 = psList.filter((pc) => pc.number >= 61 && pc.number <= 68).reverse();
    const group5 = psList.filter((pc) => pc.number >= 69 && pc.number <= 72);

    return (
        <div className="confortPlusMain">
            <div className="comfortPlus_inner">
                <div className="stenka_left">
                    {group5.map((pc) => (
                        <PcItem key={pc.number} pc={pc} />
                    ))}
                </div>

                <div className="seredinaComfortPlus">
                    <div>
                        {group4.map((pc) => (
                            <PcItem key={pc.number} pc={pc} />
                        ))}
                    </div>
                    <div>
                        {group3.map((pc) => (
                            <PcItem key={pc.number} pc={pc} />
                        ))}
                    </div>
                </div>

                <div className="stenka_right">
                    <div>
                        {group2.map((pc) => (
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

            <div className="titleComfortPlus">
                <h3>КОМФОРТ ПЛЮС</h3>
            </div>
        </div>
    );
};

export default ComfortPlus;
