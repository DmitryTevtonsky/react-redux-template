import { Configuration, CurveApi, SceneApi, SendMessageApi } from "./impl/swvr";

const basePath = "http://127.0.0.1:8080"; // ? what about prod

const configuration = new Configuration({ basePath });

export const SceneController = new SceneApi(configuration);
export const SendMessageController = new SendMessageApi(configuration);
export const CurveController = new CurveApi(configuration);

// export type {
//   ErrorItem,
//   ErrorMessage,
//   Node,
//   NameWithPath,
//   RtdRequestMessage,
//   RtdResponseMessage,
//   RtdTag,
//   TreeRealTimeData,
//   TableRealTimeData,
//   ManualControlRequest,
// } from "./impl/swvr";
