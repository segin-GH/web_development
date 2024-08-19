
class LineBreakTransformer {
  constructor() {
    this.buffer = '';
  }

  transform(chunk, controller) {
    this.buffer += chunk;
    let lines = this.buffer.split('\r\n');
    this.buffer = lines.pop(); // Keep the last partial line in the buffer
    lines.forEach(line => controller.enqueue(line + '\r\n'));
  }

  flush(controller) {
    controller.enqueue(this.buffer);
  }
}

async function listPorts(device) {
  try {
    const port = await navigator.serial.requestPort();
    await port.open({ baudRate: 115200 });

    const textDecoderStream = new TextDecoderStream();
    const readableStreamClosed = port.readable.pipeTo(textDecoderStream.writable);
    const reader = textDecoderStream.readable
      .pipeThrough(new TransformStream(new LineBreakTransformer()))
      .getReader();

    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        reader.releaseLock();
        break;
      }
      console.log(value);
    }
  } catch (e) {
    console.error('Error:', e);
  }
}

