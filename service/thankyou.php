<?php
     if(isset($_POST["submit"])){
    $to = "subrata291291@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['name'];
    $subject = "Contact Form";
    $service = $_POST['service'];
    $phone=$_POST["phone"];
    // $message = "Name:".$first_name . "\n\n". " Subject:"  . "  Services:" .  $services . "\n\n". "  Phone No.:" .  $phone . "\n\n". "  Comments:"    . $_POST['comment'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['comment'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    //mail($from,$subject2,$message2,$headers2); 
    echo'<script>alert("Message sent successfully"</script>';
    echo'<script>window.location.href="index.html"</script>';
    }
?>

<?php  
 
if(isset($_POST['submit'])) {
 $mailto = "subrata291291@gmail.com";  //My email address
 //getting customer data
 $name = $_POST['name']; //getting customer name
 $fromEmail = $_POST['email']; //getting customer email
 $phone = $_POST['phone']; //getting customer Phome number
 $query = $_POST['query']; //getting subject line from client
 $subject2 = "Confirmation: Message was submitted successfully | Makeover"; // For customer confirmation
 
 //Email body I will receive
 $message = "Client Name: " . $name . "\n\n"
 . "Phone Number: " . $phone . "\n\n"
 . "Email Address: " . $fromEmail . "\n\n"
 . "Service Type: " . $service . "\n\n"
 . "Client Message: " . $_POST['query'];
 
 //Message for client confirmation
 $message2 = "Dear" . $name . "\n\n"
 . "Thank you for contacting us. We will get back to you shortly!" . "\n\n"
 . "You submitted the following message: " . "\n" . $_POST['message'] . "\n\n"
 . "Regards," . "\n" . "- Makeover";
 
 //Email headers
 $headers = "From: " . $fromEmail; // Client email, I will receive
 $headers2 = "From: " . $mailto; // This will receive client
 
 //PHP mailer function
 
  $result1 = mail($mailto, $subject, $message, $headers); // This email sent to My address
  $result2 = mail($fromEmail, $subject2, $message2, $headers2); //This confirmation email to client
 
  //Checking if Mails sent successfully
 
  if ($result1 && $result2) {
    $success = "Thank You...";
  } else {
    $failed = "Sorry! Message was not sent, Try again Later.";
  }
 
}
 
?>