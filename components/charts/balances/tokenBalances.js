import { Doughnut } from 'react-chartjs-2'

const TokenBalances = (props) => {
    const url = "https://randomuser.me/api/?results=15";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json['results']))
      .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <Doughnut data={}/>
        </div>
    );
}

export default TokenBalances