import Menu from "@/components/menu";
import { MenuLink } from "@/components/menu-link";
import { ContactList, ContactListSkeleton } from "@/components/contact-list";
import { Suspense } from "react";
import styles from "./layout.module.css";

async function fetchContacts() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contacts`);
  return data.json();
}
export default async function ContcatsLayout({ children }) {
  const contacts = fetchContacts();
  
  return (
    <div className={styles.Layout}>
      <aside className={styles.Sidebar}>
        
        <h4 className={styles.Subtitle}>Links</h4>
        <Menu>
            <MenuLink href="/contacts/birthdays">🎂 Birthdays</MenuLink>
        </Menu>

        <h4 className={styles.Subtitle}>Links</h4>
        <Suspense fallback={<ContactListSkeleton count={10} />}>
          <ContactList contacts={contacts} />
        </Suspense>

      </aside>

      {children}
    </div>
  );
}