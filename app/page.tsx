"use client";

import { useMemo, useState } from "react";
import { counties } from "@/data/counties";
import CountryCard from "@/components/CountryCard";
import BudgetSidebar from "@/components/BudetSidebar";
import styles from "./page.module.css";

export default function HomePage() {
  const [budget, setBudget] = useState(250);

  const filteredCounties = useMemo(() => {
    return counties.filter((county) => county.price <= budget);
  }, [budget]);
  const recommendation = filteredCounties[0];
  {recommendation && (
  <div style={{
    background: "#fff",
    borderRadius: "20px",
    padding: "20px",
    marginBottom: "20px",
    border: "2px solid #F28B82"
  }}>
    <h3>✨ Recommended for You</h3>
    <p>
      Based on your budget, we suggest: <strong>{recommendation.name}</strong>
    </p>
  </div>
)}
<button
  onClick={() => alert("Invite sent! ✈️💌")}
  className={styles.inviteButton}
>
  
  Send Invite
</button>

  return (
    <main className={styles.page}>
      <div className={styles.layout}>
        <BudgetSidebar budget={budget} setBudget={setBudget} />

        <section className={styles.mainSection}>
          <div>
            <h1 className={styles.headerTitle}> Globit </h1>
            <p className={styles.headerText}>
              Showing places within your budget
            </p>
          </div>

          {filteredCounties.length === 0 ? (
            <div className={styles.emptyBox}>
              <h3>No places found</h3>
              <p>Increase your budget to see more options.</p>
            </div>
          ) : (
            <div className={styles.cardGrid}>
              {filteredCounties.map((county) => (
                <CountryCard key={county.id} county={county} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}