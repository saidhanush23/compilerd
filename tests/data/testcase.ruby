const { spawn } = require('child_process');

test('ruby : print hello world', async () => {
  // Ruby code to print "Hello World"
  const rubyCode = `puts "Hello World"`;
  
  // Command to execute Ruby code
  const rubyProcess = spawn('ruby', ['-e', rubyCode]);
  
  let output = '';
  rubyProcess.stdout.on('data', (data) => {
    output += data.toString();
  });
  
  rubyProcess.stderr.on('data', (data) => {
    console.error(`Error from Ruby: ${data}`);
  });
  
  // Wait for Ruby process to exit
  const exitCode = await new Promise((resolve) => {
    rubyProcess.on('close', (code) => {
      resolve(code);
    });
  });
  
  // Assert the output matches expected result
  expect(output.trim()).toBe('Hello World\n');
});
