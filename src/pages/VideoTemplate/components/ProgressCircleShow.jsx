import { ProgressCircle, AutoCenter } from 'antd-mobile';
import { useRequest } from 'ahooks';
import VideoService from '@/services/video';
import { useEffect } from 'react';

export default function ProgressCircleShow(props) {
  const { taskId } = props;
  const { data, cancel } = useRequest(() => VideoService.progress(taskId), {
    pollingInterval: 1000,
  });
  const { progress, status, file } = data || {};
  const isComplete = status === 'complete';

  useEffect(() => {
    if (file) {
      cancel();
    }
  }, [file]);

  return (
    <AutoCenter>
      {file ? (
        <video controls autoPlay>
          <source src={`/api/${file}`} type="video/mp4" />
        </video>
      ) : (
        <ProgressCircle percent={progress}>{isComplete ? '渲染完成' : progress}</ProgressCircle>
      )}
    </AutoCenter>
  );
}
