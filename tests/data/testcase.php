const { spawn } = require('child_process');

test('php : hello world', async () => {
  // PHP code to print "Hello World"
  const phpCode = `<?php echo "Hello World"; ?>`;
  
  // Command to execute PHP code
  const phpProcess = spawn('php', ['-r', phpCode]);
  
  let output = '';
  phpProcess.stdout.on('data', (data) => {
    output += data.toString();
  });
  
  phpProcess.stderr.on('data', (data) => {
    console.error(`Error from PHP: ${data}`);
  });
  
  // Wait for PHP process to exit
  const exitCode = await new Promise((resolve) => {
    phpProcess.on('close', (code) => {
      resolve(code);
    });
  });
  
  // Assert the output matches expected result
  expect(output.trim()).toBe('Hello World');
});
