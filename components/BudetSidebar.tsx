import styles from "./BudgetSidebar.module.css";

type BudgetSidebarProps = {
  budget: number;
  setBudget: (value: number) => void;
};

export default function BudgetSidebar({
  budget,
  setBudget,
}: BudgetSidebarProps) {
  return (
    <aside className={styles.sidebar}>
      {/* 💰 BUDGET SECTION */}
      <h2 className={styles.title}>Budget</h2>

      <p className={styles.label}>Selected Budget</p>
      <p className={styles.price}>${budget}</p>

      <input
        type="range"
        min="100"
        max="5000"
        step="10"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
        className={styles.slider}
      />

      {/* ✂️ Divider */}
      <div className={styles.divider}></div>

      {/* 💌 INVITE FRIEND SECTION */}
      <h3 className={styles.friendTitle}>Invite a Friend 💌</h3>

      <input
        type="text"
        placeholder="Friend's name"
        className={styles.input}
      />

      <input
        type="email"
        placeholder="Friend's email"
        className={styles.input}
      />

      <textarea
        placeholder="Let's plan this trip together ✈️✨"
        className={styles.textarea}
      />

      <button
        onClick={() => alert("Invite sent! ✈️💖")}
        className={styles.inviteButton}
      >
        Send Invite
      </button>
    </aside>
  );
}