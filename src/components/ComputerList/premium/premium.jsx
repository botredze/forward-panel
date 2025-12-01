import './style.scss';
import PcItem from '../../PcItem/PcItem';

const Premium = ({ psList }) => {
    const group1 = psList.filter((pc) => pc.number >= 94 && pc.number <= 96);
    const group2 = psList.filter((pc) => pc.number >= 97 && pc.number <= 101).reverse();
    return (
        <div className="premiumMain">
            <div className="stenkaTop">
                {group1.map((pc) => (
                    <PcItem key={pc.number} pc={pc} />
                ))}
            </div>

            <div className="titleComfortPlus">
                <h3>PREMIUM ЗАЛ</h3>
            </div>

            <div className="titleComfortPlusMobile">
                <h3>PREMIUM ЗАЛ</h3>
            </div>

            <div className="stenkaButtom">
                {group2.map((pc) => (
                    <PcItem key={pc.number} pc={pc} />
                ))}
            </div>
        </div>
    );
};

export default Premium;
