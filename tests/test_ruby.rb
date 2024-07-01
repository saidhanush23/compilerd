# test_ruby.rb

# Example function to test
def add(a, b)
    a + b
end

# Test case using RSpec
describe "add" do
    it "adds two numbers correctly" do
        result = add(2, 3)
        expect(result).to eq(5)
    end
end
