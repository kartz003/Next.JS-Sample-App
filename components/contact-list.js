import { use } from "react";
import Menu from "./menu";
import { MenuLink } from "./menu-link";
import styles from "./contact-list.module.css";

export function ContactList({ contacts }) {
    const data = use(contacts);
    return (
        <Menu className={styles.Menu}>
          {data.map((contact) => (
            <MenuLink key={contact.id} href={`/contacts/${contact.id}`}>
                <div className={styles.Card}>
                    <img src={contact.avatarUrl} />
                    {contact.firstName} {contact.lastName}
                </div>
            </MenuLink>
          ))}
        </Menu>
    );
}

export function ContactListSkeleton({ count }) {
    return (
        <div className={styles.SkeletonList}>
            {[...Array(count)].map((_, index) => (
                <div key={index} className={styles.SkeletonItem}>       
                    <div className={styles.Card}>
                        <div className={styles.SkeletonImage} />
                        <div className={styles.SkeletonFullName} />
                    </div>
                </div>
            ))}
        </div>
    );
}