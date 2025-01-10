<?php
     if(isset($_POST["submit"])){
    $to = "subrata291291@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['name'];
    $subject1 = $_POST['subject'];
     $services = $_POST['services'];
     $phone=$_POST["phone"];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = "Name:".$first_name . "\n\n". " Subject:"  . $subject1 . "\n\n". "  Services:" .  $services . "\n\n". "  Phone No.:" .  $phone . "\n\n". "  Comments:"    . $_POST['comment'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['comment'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    //mail($from,$subject2,$message2,$headers2); 


          echo'<script>alert("Message sent successfully"</script>';

            }

            ?>


            

<?php  
 
if(isset($_POST['submit'])) {
 $mailto = "subrata@a1future.com";  //My email address
 //getting customer data
 $name = $_POST['Name']; //getting customer name
 $fromEmail = $_POST['your-email']; //getting customer email
 $phone = $_POST['phone']; //getting customer Phome number
 $query = $_POST['query']; //getting subject line from client
 $subject2 = "Confirmation: Message was submitted successfully | HMA WebDesign"; // For customer confirmation
 
 //Email body I will receive
 $message = "Cleint Name: " . $name . "\n\n"
 . "Phone Number: " . $phone . "\n\n"
 . "Email Address: " . $fromEmail . "\n\n"
 . "Client Message: " . $_POST['query'];
 
 //Message for client confirmation
 $message2 = "Dear" . $name . "\n"
 . "Thank you for contacting us. We will get back to you shortly!" . "\n\n"
 . "You submitted the following message: " . "\n" . $_POST['message'] . "\n\n"
 . "Regards," . "\n" . "- HMA WebDesign";
 
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