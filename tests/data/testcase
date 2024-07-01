const { spawn } = require('child_process');

test('python : hello world', async () => {
  // Command to execute Python code that prints "Hello World"
  const pythonProcess = spawn('python', ['-c', 'print("Hello World")']);
  
  let output = '';
  pythonProcess.stdout.on('data', (data) => {
    output += data.toString();
  });
  
  pythonProcess.stderr.on('data', (data) => {
    console.error(`Error from Python: ${data}`);
  });
  
  // Wait for Python process to exit
  const exitCode = await new Promise((resolve) => {
    pythonProcess.on('close', (code) => {
      resolve(code);
    });
  });
  
  // Assert the output matches expected result
  expect(output.trim()).toBe('Hello World');
});
