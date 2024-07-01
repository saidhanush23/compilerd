# ruby_executor.rb
code = STDIN.read
begin
  eval(code)
rescue Exception => e
  puts e.message
end
