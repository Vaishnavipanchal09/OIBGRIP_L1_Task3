<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="9.css">
    <title>TEMPERTURE_CONVERTER</title>
</head>
<body>
    <div class="container">
        <form action="#" class="container--form">
            <label for="number_field" class="form--label">Degrees</label>
            <input type="number" name="number_field" id="number_field" class="form--input_number">
            <label for="type_select" class="form--label">Type</label>
            <select name="type_select" id="type_select" class="form--select">
                <option value="Fahrenheit">Fahrenheit</option>
                <option value="Celsius">Celsius</option>
            </select>

            <button class="form--button">convert</button>
            
        </form>

        <p class="container--paragraph_converted_result">result</p>
        <p class="container--paragraph-show"></p>
    </div>
    <script src="9.js"></script>
</body>
</html>
