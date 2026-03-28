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
      <h2 className={styles.title}>Budget</h2>

      <p className={styles.label}>Selected Budget</p>
      <p className={styles.price}>${budget}</p>

      <input
        type="range"
        min="100"
        max="500"
        step="10"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
        className={styles.slider}
      />

      <div className={styles.text}>
        <p>Move the slider to filter by budget.</p>
        <p>Anything above your budget disappears.</p>
      </div>
    </aside>
  );
}