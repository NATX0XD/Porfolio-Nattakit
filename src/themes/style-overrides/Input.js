const OverrideInput = ({mode}) => {
  return {
    Input: {
      colorBgContainerDisabled: "rgba(0,0,0,0)",
      colorTextDisabled: mode === "Dark" ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,1)",
      fontSize: 12,
    },
  };
};

export default OverrideInput;
