import styles from "./Navigation.module.css";

const Navigation = () => {
    // console.log("ppppppppppp",styles);
    return(
    <nav className={ `${styles.navigation} container`}>
            <div className="logo">
                <img src="/images/Ng.jpg" alt="Ng-logo" className={styles.logoImage} />
            </div>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
    </nav>
    )
}

export default Navigation;