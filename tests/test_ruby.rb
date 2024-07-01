
require 'minitest/autorun'

class TestRuby < Minitest::Test
  def test_addition
    result = `echo 'puts 1 + 1' | ruby ../ruby_executor.rb`
    assert_equal "2\n", result
  end

  def test_error_handling
    result = `echo 'puts unknown_variable' | ruby ../ruby_executor.rb`
    assert_includes result, "undefined local variable or method"
  end
end
