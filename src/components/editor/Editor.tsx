import * as React from "react";
import { Editor as EditorCore } from "@atlaskit/editor-core";
import ToolsDrawer from "./ToolsDrawer";
import selectMockMenu from "./helphers/selectMockMenu";
import extensionHandlers from "./helphers/extensionHandlers";

export interface EditorProps {
  getValue: (value: string) => void;
}

const Editor = (props: EditorProps) => (
  <ToolsDrawer
    isImageUpload
    renderEditor={({
      onChange,
      legacyImageUploadProvider,
      fileUploadMenuItem,
      testButtom
    }) => (
      <EditorCore
        appearance="comment"
        extensionHandlers={extensionHandlers}
        insertMenuItems={[
          ...selectMockMenu(["movie"]),
          fileUploadMenuItem,
          testButtom
        ]}
        onChange={onChange}
        legacyImageUploadProvider={legacyImageUploadProvider}
        allowExtension
      />
    )}
    {...props}
  />
);

export default Editor;
