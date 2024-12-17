/**
 * 将 rgb(r, g, b) 转换为 rgba(r, g, b, a)
 * @param {string} rgbStr 原始的 rgb 字符串，如 "rgb(13, 176, 201)"
 * @param {number} alpha 透明度，取值范围为0-1，如0.2
 * @returns {string} 返回 rgba 格式的颜色字符串，如 "rgba(13, 176, 201, 0.2)"
 */
export const rgbToRgba = (rgbStr: string, alpha: number = 0.2) => {
  // 去掉前后空格，并确保字符串小写
  rgbStr = rgbStr.trim().toLowerCase();

  // 匹配 rgb(...) 中的数字
  const match = rgbStr.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
  if (!match) {
    return hexToRgb(rgbStr, alpha);
    // throw new Error('输入的 rgb 字符串格式不正确，请使用类似 "rgb(13, 176, 201)" 的格式');
  } else {
    const r = match[1];
    const g = match[2];
    const b = match[3];

    // 返回 rgba 字符串
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
};

/* 十六进制转 rgba */

export const hexToRgb = (hex: string, alpha: number = 0.2): string => {
  // 移除 "#" 符号
  hex = hex.replace(/^#/, "");

  // 检查十六进制字符串的长度，确保它是有效的
  if (hex.length !== 3 && hex.length !== 6) {
    throw new Error("Invalid hex color format");
  }

  // 将十六进制字符串扩展为 6 个字符（如果是 3 个字符的格式）
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // 将十六进制字符串转换为十进制数值
  const bigint = parseInt(hex, 16);

  // 从十进制数值中提取 RGB 分量
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgb(${r}, ${g}, ${b},${alpha})`;
};
