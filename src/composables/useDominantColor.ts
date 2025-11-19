import { ref } from 'vue';

export default function useDominantColor() {
  const bgColor = ref('#ffffff');
  const outlineColor = ref('#000000');
  const labelColor = ref('#000000');
  const subLabelColor = ref('#666666');

  const getBrightness = (r:number, g:number, b:number):number =>
  (r * 299 + g * 587 + b * 144) / 1000;

  const getContrastColor = (rgb:string):string => {
    const [r, g, b]:[number, number, number] = rgb
    .replace(/rgb\(|\)|\s+/g, '')
    .split(',')
    .map(Number) as [number, number, number];

    return getBrightness(r, g, b) > 160 ? '#000000':'#ffffff';
  }

  const getSubLabelColor = (label:string):string =>
  label === '#ffffff' ? 'rgba(255,255,255,0.7)':'rgba(0,0,0,0.6)';

  const getDominantColor = (imgElement:HTMLImageElement | null) => {
    if (!imgElement) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = imgElement.naturalWidth;
    canvas.height = imgElement.naturalHeight;
    ctx.drawImage(imgElement, 0, 0);

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;

    const colorCount:Record<string, number> = {};

    for (let i = 0; i < data.length; i+=4) {
      const [r, g, b, a] = [data[i]!, data[i+1]!, data[i+2]!, data[i+3]!];

      if (a < 128) continue;

      const key = `${Math.round(r/10)*10},${Math.round(g/10)*10},${Math.round(b/10)*10}`;
      colorCount[key] = (colorCount[key] ??  0) + 1;
    }

    let max = 0;
    let dominant = '255,255,255';

    for (const key in colorCount) {
      if (colorCount[key] ?? 0 > max) {
        max = colorCount[key] ?? 0;
        dominant = key;
      }
    }

    const [r, g, b] = dominant.split(',').map(Number) as [number, number, number];

    bgColor.value = `rgb(${Math.min(r+75, 245)}, ${Math.min(g+75, 245)}, ${Math.min(b+75, 245)})`;
    outlineColor.value = `rgb(${r},${g},${b})`;
    labelColor.value = getContrastColor(bgColor.value);
    subLabelColor.value = getSubLabelColor(labelColor.value);
  }

  return { bgColor, outlineColor, labelColor, subLabelColor, getDominantColor };
}
