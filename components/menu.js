import styles from "./menu.module.css";

export default function Menu({ children, className }) {
    return (
        <nav className={`${styles.Menu} ${className}`}>
            <ul>{children}</ul>
        </nav>
    );
}