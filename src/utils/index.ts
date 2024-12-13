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
    throw new Error('输入的 rgb 字符串格式不正确，请使用类似 "rgb(13, 176, 201)" 的格式');
  }

  const r = match[1];
  const g = match[2];
  const b = match[3];

  // 返回 rgba 字符串
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
