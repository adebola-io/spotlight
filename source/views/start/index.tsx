import { For } from '@adbl/unfinished';
import classes from './styles.module.scss';

export default function Start() {
  const count = Array(60).keys();
  return (
    <div class={classes.gridContainer}>
      <div class={classes.grid}>
        {For(count, () => (
          <div class={classes.item} />
        ))}
      </div>
    </div>
  );
}
