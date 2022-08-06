import { Button, Progress } from 'antd';
import { useProgress } from './hooks/useProgress';
import './PingPong.css';

function PingPong({ isPinging, ping }) {
  const { value, setValue, success } = useProgress({ isPinging });

  const clickHandler = () => {
    setValue(0);
    ping();
  };

  return (
    <>
      <div className="ping-progress">
        <Progress type="circle" percent={value} />
      </div>
      <h1 className="ping-message">
        {isPinging
          ? 'Checking ...'
          : success && 'React, Redux Observable Epics, and Antd Works!'}
      </h1>
      <Button disabled={isPinging} onClick={clickHandler}>
        {isPinging ? 'Pinging ... ' : 'Start PING'}
      </Button>
    </>
  );
}

export default PingPong;
