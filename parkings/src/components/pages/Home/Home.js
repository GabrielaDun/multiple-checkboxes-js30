import Button from '../../common/Button/Button';
import PageTitle from '../../common/PageTitle/PageTitle';
import styles from './Home.module.scss'


const Home= () => (
  <div>
    <div className={styles.container}>
        <h1>GET YOUR ONLINE PARKING TICKETS</h1>
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.carChoice}>
                    <PageTitle>Choose your vehicule</PageTitle>
                </div>
                <div className={styles.hoursChoice}>
                    <PageTitle>Number of hours:</PageTitle>
                </div>
                <div className={styles.location}>
                    <PageTitle>Parking location</PageTitle>
                    <h3>Red area</h3>
                </div>
                <div className={styles.result}>
                    <PageTitle>Your fee per Xh:</PageTitle>
                    <p>On this ride you could have saved:</p>
                    <p>1.3 euro by using ecological car</p>
                    <p>1.5 euro by parking in a green area</p>
                </div>
                <Button>Buy the ticket</Button>
            </div>
            <div className={styles.photo}>
            <img
                className={styles.image}
                alt="Map"
                src={`${process.env.PUBLIC_URL}/images/map.jpg`} />
            </div>
        </div>
    </div>
  </div>
);

export default Home;