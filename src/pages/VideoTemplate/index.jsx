import { Button, Form, ImageUploader, Input, NavBar, Modal } from 'antd-mobile';
import { useState } from 'react';
import ProgressCircleShow from './components/ProgressCircleShow';
import VideoService from '@/services/video';

const uploadAction = async (file) => {
  const rst = await VideoService.uploadImage({ file });
  console.log('🚀 ~ src/pages/VideoTemplate/index.jsx 8 🍪rst🍪', rst);
  return { url: `api/${rst?.url}` };
};

const submitAction = async (values) => {
  const { taskId } = await VideoService.create(values);

  Modal.show({
    content: <ProgressCircleShow taskId={taskId} />,
    actions: [],
  });
};

export default function VideoTemplate() {
  const [fileList, setFileList] = useState([]);

  return (
    <>
      <NavBar onBack={() => {}}>模板</NavBar>
      <Form
        layout="horizontal"
        onFinish={submitAction}
        footer={
          <Button block type="submit" color="primary" size="large">
            提交
          </Button>
        }
      >
        <Form.Header>请选择模板与图片</Form.Header>
        <Form.Item name="id" label="模板" help="模板ID" rules={[{ required: true, message: '模板不能为空' }]}>
          <Input placeholder="请输入模板ID" />
        </Form.Item>
        <Form.Item name="images" label="图片集" help="图片集" rules={[{ required: true, message: '模板不能为空' }]}>
          <ImageUploader value={fileList} onChange={setFileList} upload={uploadAction} />
        </Form.Item>
      </Form>
    </>
  );
}
