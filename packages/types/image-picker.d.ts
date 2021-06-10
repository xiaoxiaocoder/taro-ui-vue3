

import AtComponent from './base'

interface FileItem {
  path: string

  size: number
}

export interface File {
  url: string

  file?: FileItem

  /**
   * 图片上传的状态
   * - `uploading`: 正在上传   
   * - `failed`: 上传失败   
   * - `done`: 上传成功   
   * @default "done"
   * @since v1.0.0-alpha18 
   */
  status?: "uploading" | "failed" | "done"
  /**
  * 图片上传的状态文案
  * @since 1.0.0-alpha18
  */
  message?: string
  /**
  * 自定义字段
  * @since 1.0.0-alpha18
  */
  [propName: string]: any
}

export interface AtImagePickerProps extends AtComponent {
  /**
   * 图片文件数组, 元素为对象, 包含属性 url（必选)
   */
  files: File[]
  /**
   * 图片预览模式，详见[微信开发者文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)
   * @default 'aspectFill'
   */
  mode?: 'scaleToFill' | 'aspectFit' | 'aspectFill' | 'widthFix' | 'top' | 'bottom' | 'center' | 'left' | 'right' | 'top left' | 'top right' | 'bottom left' | 'bottom right'
  /**
   * 是否显示添加图片按钮
   * @default true
   */
  showAddBtn?: boolean
  /**
   * 是否支持多选
   * @default false
   */
  multiple?: boolean
  /**
   * 单行的图片数量，不能为 0 或负数
   * @default 4
   */
  length: number
  /**
   * 最多可以选择的图片张数
   * @since v2.0.2
   */
  count?: number
  /**
   * 所选的图片的尺寸
   * - `original`: 原图
   * - `compressed`: 压缩图
   * @default ["original", "compressed"]
   * @since v2.0.2
   */
  sizeType?: ("original" | "compressed")[]
  /**
   * 选择图片的来源
   * - `album`: 从相册选图   
   * - `camera`: 使用相机   
   * - `user`: 使用前置摄像头 (仅H5纯浏览器使用)   
   * - `environment`: 使用后置摄像头 (仅H5纯浏览器) 
   * @default ["album", "camera"]  
   * @since v2.0.2
   */
  sourceType?: ("album" | "camera" | "user" | "environment")[]
}

interface EmitsOptions {
  /**
  * files 值发生变化触发的回调函数, operationType 操作类型有添加，移除，如果是移除操作，则index 代表的是移除图片的索引
  */
  onChange: (args: {
    files: File[],
    operationType: 'add' | 'remove',
    index?: number
  }) => void
  /**
   * 点击图片触发的回调
   */
  onImageClick?: (index: number, file: File) => void
  /**
   * 选择失败触发的回调
   */
  onFail?: (message: string) => void
}
