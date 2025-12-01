import './style.scss';
import PcItem from '../../PcItem/PcItem';

const Comfort = ({ psList }) => {
    const group1 = psList.filter((pc) => pc.number >= 20 && pc.number <= 27).reverse();
    const group2 = psList.filter((pc) => pc.number >= 28 && pc.number <= 35).reverse();
    const group3 = psList.filter((pc) => pc.number >= 36 && pc.number <= 39);
    const group4 = psList.filter((pc) => pc.number >= 40 && pc.number <= 43);

    return (
        <div className="comfortMain">
            <div className="comfortMain_inner">
                <div className="stenka">
                    <div>
                        {group3.map((pc) => (
                            <PcItem key={pc.number} pc={pc} />
                        ))}
                    </div>

                    <div>
                        {group4.map((pc) => (
                            <PcItem key={pc.number} pc={pc} />
                        ))}
                    </div>
                </div>

                <div className="seredina_in">
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

            <div className="comfortTitleSecond">
                <h3>КОМФОРТ ЗАЛ</h3>
            </div>
        </div>
    );
};

export default Comfort;
