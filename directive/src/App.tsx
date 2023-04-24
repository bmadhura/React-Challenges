import Tooltip from './components/tooltip/tooltip';
import Styles from './App.module.scss';

const App = () => {
  return (
    <div className={Styles.page}>
        <Tooltip tooltipText="Hovered text in tooltip">
          <button className={Styles.text}>
            Hover Me
          </button>
        </Tooltip>
      </div>
  );
};

export default App;
