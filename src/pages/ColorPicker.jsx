import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components";

const change = (args) => {
  document.getElementById("preview").style.backgroundColor = args.currentValue.hex;
}

const ColorPicker = () => (

  // CardBlank
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">

    {/* Header */}
    <Header category="App" title="ColorPicker" />

    {/* Content */}
    <div className="text-center">

      {/* Pen */}
      <div id="preview"/>

      {/* Palette & Picker Content*/}
      <div className="flex justify-center items-center gap-20 flex-wrap">

        {/* Inline Palette */}
        <div>

          {/* Palette Header */}
          <p className="text-2xl dark:text-gray-400 font-semibold mt-2 mb-4">Inline Palette</p>

          {/* ColorPickerComponent & props*/}
          <ColorPickerComponent
            id="inline-palette"
            mode="Palette"
            modeSwitcher={false}
            inline
            showButtons={false}
            change={change}
           />

        </div>

        {/* Inline Picker */}
        <div>

          {/* Picker Header */}
          <p className="text-2xl dark:text-gray-400 font-semibold mt-2 mb-4">Inline Picker</p>

          {/* ColorPickerComponent & props*/}
          <ColorPickerComponent
            id="inline-picker"
            mode="Picker"
            modeSwitcher={false}
            inline
            showButtons={false}
            change={change}
           />

        </div>

      </div>

    </div>

  </div>
    
)

export default ColorPicker;