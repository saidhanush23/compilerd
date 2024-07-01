<?php
use PHPUnit\Framework\TestCase;

class TestPHP extends TestCase
{
  public function testAddition()
  {
    $result = shell_exec('echo "<?php echo 1 + 1;" | php ../php_executor.php');
    $this->assertEquals("2", $result);
  }

  public function testErrorHandling()
  {
    $result = shell_exec('echo "<?php echo $unknown_variable;" | php ../php_executor.php');
    $this->assertStringContainsString("undefined variable", $result);
  }
}
?>
