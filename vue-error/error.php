<?php

class Err
{
    private $input;
    private $errors = [];

    public function __construct()
    {
        $model = json_decode(file_get_contents("php://input"), 1);
        $this->input = $model['model'];
    }

    public function process()
    {
        $valid_data = ['username', 'title'];
        $this->validEmpty($valid_data);

        if (count($this->errors) !== 0) {
            return $this->format(1, $this->errors, '');
        }
        
        return $this->format(0, 'success');
    }

    public function validEmpty($valid_data)
    {
        foreach ($valid_data as $value) {
            if (empty($this->input[$value])) {
                $this->errors[$value] = $value . ' 不能为空';
            }
        }
        
    }

    public function format($err_code = '', $err_msg = '', $result = '')
    {
        $builder['code'] = $err_code;
        $builder['msg'] = $err_msg;
        $builder['rs'] = $result;

        return json_encode($builder);
    }
}

$error = new Err();
echo $error->process();



