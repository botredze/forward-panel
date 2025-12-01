import { useEffect, useState } from 'react';
import './styles.scss';
import getComputerList from '../API/apiHelper';
import PcItem from '../PcItem/PcItem';
import StandartComfort from './standartComfort/StandartComfort';
import Vip from './vip/vip';
import Comfort from './comfort/comfort';
import ComfortPlus from './comfortPlus/comfortPlus';
import Premium from './premium/premium';
import Tarifs from '../Tarifs/Tarifs';

const ComputerList = () => {
    const [computerList, setComputerList] = useState([]);

    const fetchData = async () => {
        try {
            const data = await getComputerList();

            console.log(data, 'data');
            setComputerList(data);
            console.log(data);
        } catch (error) {
            console.error('Ошибка при получении списка компьютеров:', error);
        }
    };

    console.log(computerList, 'computerList');

    useEffect(() => {
        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mainContainer">
            <div className="tarifsSection">
                <Tarifs />
            </div>
            <div className="section comfortSection">
                <Comfort psList={computerList} />
            </div>

            <div className="row">
                <div className="section vipSection">
                    <Vip psList={computerList} />
                </div>

                <div className="section standartComfortSection">
                    <StandartComfort psList={computerList} />
                </div>
            </div>

            <div className="section comfortPlusSection">
                <ComfortPlus psList={computerList} />
            </div>

            <div className="section premiumSection">
                <Premium psList={computerList} />

                <div className="reception">
                    <h3>Ресепшн & БАР</h3>
                </div>
            </div>
        </div>
    );
};

export default ComputerList;
