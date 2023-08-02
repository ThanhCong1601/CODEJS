
client.onConnectionLost = function() {
  console.log('Kết nối MQTT đã bị mất');
  Trang_thai_erro.style.opacity = '1';
  Trang_thai_connected.style.opacity = '0';
};
client.onConected = function(){
  console.log("Connected to MQTT broker");
  Trang_thai_erro.style.opacity = '0';
  Trang_thai_connected.style.opacity = '2';
}

// TURN ON VAN TAY 1,2
  Van_tay1_OFF.style.opacity = '0';
  Van_tay1_ON.style.opacity = '1';

  Van_tay2_OFF.style.opacity = '0';
  Van_tay2_ON.style.opacity = '1';

function Bom_ON() { 
  var message = new Paho.MQTT.Message("Bom_ON");
  message.destinationName = mqttTopic1;
  client.send(message);
  console.log("Sent Bom_ON message to MQTT broker");
}

function Bom_OFF() {
  var message = new Paho.MQTT.Message("Bom_OFF");
  message.destinationName = mqttTopic1;
  client.send(message);
  console.log("Sent Bom_OFF message to MQTT broker");
}

function Van_buom_dien_ON() { 
  var message = new Paho.MQTT.Message("Van_buom_dien_ON");
  message.destinationName = mqttTopic2;
  client.send(message);
  console.log("Sent Van_buom_dien_ON message to MQTT broker");
}

function Van_buom_dien_OFF() {
  var message = new Paho.MQTT.Message("Van_buom_dien_OFF");
  message.destinationName = mqttTopic2;
  client.send(message);
  console.log("Sent Van_buom_dien_OFF message to MQTT broker");
}

//NUT NHAN GAT Van dien 1
document.getElementById('Van_dien1').addEventListener('change', function() {
  if (this.checked) {
    var message = new Paho.MQTT.Message("Van_dien1_ON");
    message.destinationName = mqttTopic3;
    client.send(message);
    console.log("Sent Van_dien1_ON message to MQTT broker");
  } else {
    var message = new Paho.MQTT.Message("Van_dien1_OFF");
    message.destinationName = mqttTopic3;
    client.send(message);
    console.log("Sent Van_dien1_OFF message to MQTT broker");
  }
});
//NUT NHAN GAT Van dien 2
document.getElementById('Van_dien2').addEventListener('change', function() {
  if (this.checked) {
    var message = new Paho.MQTT.Message("Van_dien2_ON");
    message.destinationName = mqttTopic4;
    client.send(message);
    console.log("Sent Van_dien2_ON message to MQTT broker");
  } else {
    var message = new Paho.MQTT.Message("Van_dien2_OFF");
    message.destinationName = mqttTopic4;
    client.send(message);
    console.log("Sent Van_dien2_OFF message to MQTT broker");
  }
});

  // Xử lý phản hồi điều khiển
// Khi kết nối MQTT thành công, đăng ký lắng nghe phản hồi điều khiển
// Khi kết nối MQTT thành công, đăng ký lắng nghe phản hồi điều khiển

client.onMessageArrived = function(message) {
  var topic1 = message.destinationName;
  var payload1 = message.payloadString;
  var topic2 = message.destinationName;
  var payload2 = message.payloadString;
  var topic3 = message.destinationName;
  var payload3 = message.payloadString;
  var topic4 = message.destinationName;
  var payload4 = message.payloadString;
 
  if (topic1 === 'ID_Device/Bom') {
    var status1 = payload1; 
        active1 = status1;
    if (status1 === 'Bom_ON') {


    }
    else if (status1 === 'Bom_OFF') {

    }
  }
 
  if (topic2 === 'ID_Device/Van_buom_dien') {
    var status2 = payload2; 
        active2 = status2;
    if (status2 === 'Van_buom_dien_ON') {

  
    }
    else if (status2 === 'Van_buom_dien_OFF') {

    }
    console.log("Active2: " +active2);
  }

  if (topic3 === 'ID_Device/Van_dien1') {
    var status3 = payload3; 
        active3 = status3;
    if (status3 === 'Van_dien1_ON') {

    }
    else if (status3 === 'Van_dien1_OFF') {

    }
    console.log(active3);
  }

  if (topic4 === 'ID_Device/Van_dien2') {
    var status4 = payload4; 
        active4 = status4;
    if (status4 === 'Van_dien2_ON') {

    }
    else if (status4 === 'Van_dien2_OFF') {

    }
  }

  //console.log(active2);
  // Dieu khien bom
  if (topic1 === 'ID_Device/Bom') {
    var status1 = payload1; 
    if (status1 === 'Bom_ON') {
      console.log('Bơm đã được bật');

      Bom1_OFF.style.opacity = '0';
      Bom1_ON.style.opacity = '1';

      Ong_thang_doc1_OFF.style.opacity = '0';
      Ong_thang_doc1_ON.style.opacity = '1';

      Ong_L_traiduoi1_OFF.style.opacity = '0';
      Ong_L_traiduoi1_ON.style.opacity = '1';

      Ong_thang_ngang1_OFF.style.opacity = '0';
      Ong_thang_ngang1_ON.style.opacity = '1';
   
      Ong_L_phaiduoi1_OFF.style.opacity = '0';
      Ong_L_phaiduoi1_ON.style.opacity = '1';

      Ong_thang_ngang2_OFF.style.opacity = '0';
      Ong_thang_ngang2_ON.style.opacity = '1';
      setTimeout(function() {
        // if(active2 === "Van_buom_dien_OFF" ) {
        // }
        // var message = new Paho.MQTT.Message("Bom_OFF");
        //     message.destinationName = mqttTopic1;
        //     client.send(message);
        //     console.log("Sent Bom_OFF message to MQTT broker");
      }, 5000);
    }
     else if (status1 === 'Bom_OFF') {
    
      console.log('Bơm đã được tắt');
      Ong_thang_doc1_OFF.style.opacity = '1';
      Ong_thang_doc1_ON.style.opacity = '0';
    
      Ong_L_traiduoi1_OFF.style.opacity = '1';
      Ong_L_traiduoi1_ON.style.opacity = '0';
    
      Ong_thang_ngang1_OFF.style.opacity = '1';
      Ong_thang_ngang1_ON.style.opacity = '0';
    
      Bom1_OFF.style.opacity = '1';
      Bom1_ON.style.opacity = '0';
    
      Ong_L_phaiduoi1_OFF.style.opacity = '1';
      Ong_L_phaiduoi1_ON.style.opacity = '0';
    
      Ong_thang_ngang2_OFF.style.opacity = '1';
      Ong_thang_ngang2_ON.style.opacity = '0';  

      //Phan topic2
      
      Ong_L_traiduoi2_OFF.style.opacity = '1';
      Ong_L_traiduoi2_ON.style.opacity = '0';

      Ong_thang_doc2_OFF.style.opacity = '1';
      Ong_thang_doc2_ON.style.opacity = '0';

      Ong_thang_ngang19_OFF.style.opacity = '1';
      Ong_thang_ngang19_ON.style.opacity = '0';

      Ong_thang_doc13_OFF.style.opacity = '1';
      Ong_thang_doc13_ON.style.opacity = '0';

      Ong_L_phaitren1_OFF.style.opacity = '1';
      Ong_L_phaitren1_ON.style.opacity = '0';

      Ong_thang_ngang4_OFF.style.opacity = '1';
      Ong_thang_ngang4_ON.style.opacity = '0'; 

      
      Van_giam_ap_OFF.style.opacity = '1';
      Van_giam_ap_ON.style.opacity = '0';
  
      Van_dien1_OFF.style.opacity = '1';
      Van_dien1_ON.style.opacity = '0';
  
      Ong_thang_doc3_OFF.style.opacity = '1';
      Ong_thang_doc3_ON.style.opacity = '0';
  
      Ong_L_traiduoi3_OFF.style.opacity = '1';
      Ong_L_traiduoi3_ON.style.opacity = '0';
  
      Ong_thang_ngang6_OFF.style.opacity = '1';
      Ong_thang_ngang6_ON.style.opacity = '0';
  
      Ong_thang_ngang7_OFF.style.opacity = '1';
      Ong_thang_ngang7_ON.style.opacity = '0';
  
      Ong_L_phaitren2_OFF.style.opacity = '1';
      Ong_L_phaitren2_ON.style.opacity = '0';
  
      Ong_thang_doc4_OFF.style.opacity = '1';
      Ong_thang_doc4_ON.style.opacity = '0';
  
      Ong_T_phai1_OFF.style.opacity = '1';
      Ong_T_phai1_ON.style.opacity = '0';
  
      Ong_thang_ngang8_OFF.style.opacity = '1';
      Ong_thang_ngang8_ON.style.opacity = '0';
  
      Ong_thang_doc7_OFF.style.opacity = '1';
      Ong_thang_doc7_ON.style.opacity = '0';
  
      Ong_L_phaitren3_OFF.style.opacity = '1';
      Ong_L_phaitren3_ON.style.opacity = '0';
  
      Ong_thang_ngang10_OFF.style.opacity = '1';
      Ong_thang_ngang10_ON.style.opacity = '0';
  
      Ong_thang_ngang16_OFF.style.opacity = '1';
      Ong_thang_ngang16_ON.style.opacity = '0';
  
      Ong_T_trai3_OFF.style.opacity = '1';
      Ong_T_trai3_ON.style.opacity = '0';
  
      Ong_thang_doc11_OFF.style.opacity = '1';
      Ong_thang_doc11_ON.style.opacity = '0';
  
      Ong_L_traitren1_OFF.style.opacity = '1';
      Ong_L_traitren1_ON.style.opacity = '0';
  
      Ong_thang_ngang15_OFF.style.opacity = '1';
      Ong_thang_ngang15_ON.style.opacity = '0';
  
      Ong_L_phaiduoi3_OFF.style.opacity = '1';
      Ong_L_phaiduoi3_ON.style.opacity = '0';
  
      Ong_thang_doc12_OFF.style.opacity = '1';
      Ong_thang_doc12_ON.style.opacity = '0';
  
      Ong_thang_ngang5_OFF.style.opacity = '1';
      Ong_thang_ngang5_ON.style.opacity = '0';
  
      Ong_thang_doc15_OFF.style.opacity = '1';
      Ong_thang_doc15_ON.style.opacity = '0';
  
      Ong_L_phaiduoi4_OFF.style.opacity = '1';
      Ong_L_phaiduoi4_ON.style.opacity = '0';
  
      Ong_thang_doc14_OFF.style.opacity = '1';
      Ong_thang_doc14_ON.style.opacity = '0';
  
      Ong_L_traiduoi5_OFF.style.opacity = '1';
      Ong_L_traiduoi5_ON.style.opacity = '0';
     }
  }
  //console.log(active1);
  // Dieu khien van buom dien
    if (topic2 === 'ID_Device/Van_buom_dien') {  
      var status2 = payload2;
      if (status2 === 'Van_buom_dien_ON') {
        console.log('Van bướm điện đã được bật');
        Van_buom_dien1_OFF.style.opacity = '0';
        Van_buom_dien1_ON.style.opacity = '1';
        // console.log("Gia tri cua:" + active1);
       if(active1 === "Bom_ON" ) {
        Ong_L_traiduoi2_OFF.style.opacity = '0';
        Ong_L_traiduoi2_ON.style.opacity = '1';
      
        Ong_thang_doc2_OFF.style.opacity = '0';
        Ong_thang_doc2_ON.style.opacity = '1';
      
        Ong_thang_ngang19_OFF.style.opacity = '0';
        Ong_thang_ngang19_ON.style.opacity = '1';
      
        Ong_thang_doc13_OFF.style.opacity = '0';
        Ong_thang_doc13_ON.style.opacity = '1';
      
        Ong_L_phaitren1_OFF.style.opacity = '0';
        Ong_L_phaitren1_ON.style.opacity = '1';
      
        Ong_thang_ngang4_OFF.style.opacity = '0';
        Ong_thang_ngang4_ON.style.opacity = '1'; 
         }
         else
        {
          alert("Bạn chưa bật bơm");
        }
      }
      else if (status2 === 'Van_buom_dien_OFF') {
        console.log(' Van bướm điện đã được tắt');
        Van_buom_dien1_OFF.style.opacity = '1';
        Van_buom_dien1_ON.style.opacity = '0';

        Ong_L_traiduoi2_OFF.style.opacity = '1';
        Ong_L_traiduoi2_ON.style.opacity = '0';

        Ong_thang_doc2_OFF.style.opacity = '1';
        Ong_thang_doc2_ON.style.opacity = '0';

        Ong_thang_ngang19_OFF.style.opacity = '1';
        Ong_thang_ngang19_ON.style.opacity = '0';

        Ong_thang_doc13_OFF.style.opacity = '1';
        Ong_thang_doc13_ON.style.opacity = '0';

        Ong_L_phaitren1_OFF.style.opacity = '1';
        Ong_L_phaitren1_ON.style.opacity = '0';

        Ong_thang_ngang4_OFF.style.opacity = '1';
        Ong_thang_ngang4_ON.style.opacity = '0';
        
        //Topic 2
        Ong_L_traiduoi2_OFF.style.opacity = '1';
        Ong_L_traiduoi2_ON.style.opacity = '0';
  
        Ong_thang_doc2_OFF.style.opacity = '1';
        Ong_thang_doc2_ON.style.opacity = '0';
  
        Ong_thang_ngang19_OFF.style.opacity = '1';
        Ong_thang_ngang19_ON.style.opacity = '0';
  
        Ong_thang_doc13_OFF.style.opacity = '1';
        Ong_thang_doc13_ON.style.opacity = '0';
  
        Ong_L_phaitren1_OFF.style.opacity = '1';
        Ong_L_phaitren1_ON.style.opacity = '0';
  
        Ong_thang_ngang4_OFF.style.opacity = '1';
        Ong_thang_ngang4_ON.style.opacity = '0'; 
  
        
        Van_giam_ap_OFF.style.opacity = '1';
        Van_giam_ap_ON.style.opacity = '0';
    
        Van_dien1_OFF.style.opacity = '1';
        Van_dien1_ON.style.opacity = '0';
    
        Ong_thang_doc3_OFF.style.opacity = '1';
        Ong_thang_doc3_ON.style.opacity = '0';
    
        Ong_L_traiduoi3_OFF.style.opacity = '1';
        Ong_L_traiduoi3_ON.style.opacity = '0';
    
        Ong_thang_ngang6_OFF.style.opacity = '1';
        Ong_thang_ngang6_ON.style.opacity = '0';
    
        Ong_thang_ngang7_OFF.style.opacity = '1';
        Ong_thang_ngang7_ON.style.opacity = '0';
    
        Ong_L_phaitren2_OFF.style.opacity = '1';
        Ong_L_phaitren2_ON.style.opacity = '0';
    
        Ong_thang_doc4_OFF.style.opacity = '1';
        Ong_thang_doc4_ON.style.opacity = '0';
    
        Ong_T_phai1_OFF.style.opacity = '1';
        Ong_T_phai1_ON.style.opacity = '0';
    
        Ong_thang_ngang8_OFF.style.opacity = '1';
        Ong_thang_ngang8_ON.style.opacity = '0';
    
        Ong_thang_doc7_OFF.style.opacity = '1';
        Ong_thang_doc7_ON.style.opacity = '0';
    
        Ong_L_phaitren3_OFF.style.opacity = '1';
        Ong_L_phaitren3_ON.style.opacity = '0';
    
        Ong_thang_ngang10_OFF.style.opacity = '1';
        Ong_thang_ngang10_ON.style.opacity = '0';
    
        Ong_thang_ngang16_OFF.style.opacity = '1';
        Ong_thang_ngang16_ON.style.opacity = '0';
    
        Ong_T_trai3_OFF.style.opacity = '1';
        Ong_T_trai3_ON.style.opacity = '0';
    
        Ong_thang_doc11_OFF.style.opacity = '1';
        Ong_thang_doc11_ON.style.opacity = '0';
    
        Ong_L_traitren1_OFF.style.opacity = '1';
        Ong_L_traitren1_ON.style.opacity = '0';
    
        Ong_thang_ngang15_OFF.style.opacity = '1';
        Ong_thang_ngang15_ON.style.opacity = '0';
    
        Ong_L_phaiduoi3_OFF.style.opacity = '1';
        Ong_L_phaiduoi3_ON.style.opacity = '0';
    
        Ong_thang_doc12_OFF.style.opacity = '1';
        Ong_thang_doc12_ON.style.opacity = '0';
    
        Ong_thang_ngang5_OFF.style.opacity = '1';
        Ong_thang_ngang5_ON.style.opacity = '0';
    
        Ong_thang_doc15_OFF.style.opacity = '1';
        Ong_thang_doc15_ON.style.opacity = '0';
    
        Ong_L_phaiduoi4_OFF.style.opacity = '1';
        Ong_L_phaiduoi4_ON.style.opacity = '0';
    
        Ong_thang_doc14_OFF.style.opacity = '1';
        Ong_thang_doc14_ON.style.opacity = '0';
    
        Ong_L_traiduoi5_OFF.style.opacity = '1';
        Ong_L_traiduoi5_ON.style.opacity = '0';
      }
    }

  // Dieu khien Van dien 1
    if (topic3 === 'ID_Device/Van_dien1') {
      var status3 = payload3;
      if (status3 === 'Van_dien1_ON') {
        console.log(' Van điện 1 đã được bật');
        if(active1 === "Bom_ON" ) {
          Van_giam_ap_OFF.style.opacity = '0';
          Van_giam_ap_ON.style.opacity = '1';

          Van_dien1_OFF.style.opacity = '0';
          Van_dien1_ON.style.opacity = '1';

          Ong_thang_doc3_OFF.style.opacity = '0';
          Ong_thang_doc3_ON.style.opacity = '1';

          Ong_L_traiduoi3_OFF.style.opacity = '0';
          Ong_L_traiduoi3_ON.style.opacity = '1';

          Ong_thang_ngang6_OFF.style.opacity = '0';
          Ong_thang_ngang6_ON.style.opacity = '1';

          Ong_thang_ngang7_OFF.style.opacity = '0';
          Ong_thang_ngang7_ON.style.opacity = '1';

          Ong_L_phaitren2_OFF.style.opacity = '0';
          Ong_L_phaitren2_ON.style.opacity = '1';

          Ong_thang_doc4_OFF.style.opacity = '0';
          Ong_thang_doc4_ON.style.opacity = '1';

          Ong_T_phai1_OFF.style.opacity = '0';
          Ong_T_phai1_ON.style.opacity = '1';

          Ong_thang_ngang8_OFF.style.opacity = '0';
          Ong_thang_ngang8_ON.style.opacity = '1';

          Ong_thang_ngang11_OFF.style.opacity = '0';
          Ong_thang_ngang11_ON.style.opacity = '1';

          Ong_thang_ngang17_OFF.style.opacity = '0';
          Ong_thang_ngang17_ON.style.opacity = '1';

          Ong_T_trai2_OFF.style.opacity = '0';
          Ong_T_trai2_ON.style.opacity = '1';

          Ong_thang_doc10_OFF.style.opacity = '0';
          Ong_thang_doc10_ON.style.opacity = '1';

          Ong_T_trai3_OFF.style.opacity = '0';
          Ong_T_trai3_ON.style.opacity = '1';

          Ong_thang_doc11_OFF.style.opacity = '0';
          Ong_thang_doc11_ON.style.opacity = '1';

          Ong_L_traitren1_OFF.style.opacity = '0';
          Ong_L_traitren1_ON.style.opacity = '1';

          Ong_thang_ngang15_OFF.style.opacity = '0';
          Ong_thang_ngang15_ON.style.opacity = '1';

          Ong_L_phaiduoi3_OFF.style.opacity = '0';
          Ong_L_phaiduoi3_ON.style.opacity = '1';

          Ong_thang_doc12_OFF.style.opacity = '0';
          Ong_thang_doc12_ON.style.opacity = '1';

          Ong_thang_ngang5_OFF.style.opacity = '0';
          Ong_thang_ngang5_ON.style.opacity = '1';

          Ong_thang_doc15_OFF.style.opacity = '0';
          Ong_thang_doc15_ON.style.opacity = '1';

          Ong_L_phaiduoi4_OFF.style.opacity = '0';
          Ong_L_phaiduoi4_ON.style.opacity = '1';

          Ong_thang_doc14_OFF.style.opacity = '0';
          Ong_thang_doc14_ON.style.opacity = '1';

          Ong_L_traiduoi5_OFF.style.opacity = '0';
          Ong_L_traiduoi5_ON.style.opacity = '1';

          //Phan tat Ap1
          Ong_thang_doc7_OFF.style.opacity = '1';
          Ong_thang_doc7_ON.style.opacity = '0';

          Ong_L_phaitren3_OFF.style.opacity = '1';
          Ong_L_phaitren3_ON.style.opacity = '0';

          Ong_thang_ngang10_OFF.style.opacity = '1';
          Ong_thang_ngang10_ON.style.opacity = '0';

          Ong_thang_ngang16_OFF.style.opacity = '1';
          Ong_thang_ngang16_ON.style.opacity = '0';  
        }
        else
        {
          alert("Bạn chưa bật bơm");
        }
      }
      else if (status3 === 'Van_dien1_OFF') {
        console.log('Van điện 1 đã được tắt');
   
        Van_giam_ap_OFF.style.opacity = '0';
        Van_giam_ap_ON.style.opacity = '1';
    
        Van_dien1_OFF.style.opacity = '0';
        Van_dien1_ON.style.opacity = '1';
    
        Ong_thang_doc3_OFF.style.opacity = '0';
        Ong_thang_doc3_ON.style.opacity = '1';
    
        Ong_L_traiduoi3_OFF.style.opacity = '0';
        Ong_L_traiduoi3_ON.style.opacity = '1';
    
        Ong_thang_ngang6_OFF.style.opacity = '0';
        Ong_thang_ngang6_ON.style.opacity = '1';
    
        Ong_thang_ngang7_OFF.style.opacity = '0';
        Ong_thang_ngang7_ON.style.opacity = '1';
    
        Ong_L_phaitren2_OFF.style.opacity = '0';
        Ong_L_phaitren2_ON.style.opacity = '1';
    
        Ong_thang_doc4_OFF.style.opacity = '0';
        Ong_thang_doc4_ON.style.opacity = '1';
    
        Ong_T_phai1_OFF.style.opacity = '0';
        Ong_T_phai1_ON.style.opacity = '1';
    
        Ong_thang_ngang8_OFF.style.opacity = '0';
        Ong_thang_ngang8_ON.style.opacity = '1';
    
        Ong_thang_doc7_OFF.style.opacity = '0';
        Ong_thang_doc7_ON.style.opacity = '1';
    
        Ong_L_phaitren3_OFF.style.opacity = '0';
        Ong_L_phaitren3_ON.style.opacity = '1';
    
        Ong_thang_ngang10_OFF.style.opacity = '0';
        Ong_thang_ngang10_ON.style.opacity = '1';
    
        Ong_thang_ngang16_OFF.style.opacity = '0';
        Ong_thang_ngang16_ON.style.opacity = '1';
    
        Ong_T_trai3_OFF.style.opacity = '0';
        Ong_T_trai3_ON.style.opacity = '1';
    
        Ong_thang_doc11_OFF.style.opacity = '0';
        Ong_thang_doc11_ON.style.opacity = '1';
    
        Ong_L_traitren1_OFF.style.opacity = '0';
        Ong_L_traitren1_ON.style.opacity = '1';
    
        Ong_thang_ngang15_OFF.style.opacity = '0';
        Ong_thang_ngang15_ON.style.opacity = '1';
    
        Ong_L_phaiduoi3_OFF.style.opacity = '0';
        Ong_L_phaiduoi3_ON.style.opacity = '1';
    
        Ong_thang_doc12_OFF.style.opacity = '0';
        Ong_thang_doc12_ON.style.opacity = '1';
    
        Ong_thang_ngang5_OFF.style.opacity = '0';
        Ong_thang_ngang5_ON.style.opacity = '1';
    
        Ong_thang_doc15_OFF.style.opacity = '0';
        Ong_thang_doc15_ON.style.opacity = '1';
    
        Ong_L_phaiduoi4_OFF.style.opacity = '0';
        Ong_L_phaiduoi4_ON.style.opacity = '1';
    
        Ong_thang_doc14_OFF.style.opacity = '0';
        Ong_thang_doc14_ON.style.opacity = '1';
    
        Ong_L_traiduoi5_OFF.style.opacity = '0';
        Ong_L_traiduoi5_ON.style.opacity = '1';
    
        // Phan tat ap2
    
        Ong_thang_ngang11_OFF.style.opacity = '1';
        Ong_thang_ngang11_ON.style.opacity = '0';
    
        Ong_thang_ngang17_OFF.style.opacity = '1';
        Ong_thang_ngang17_ON.style.opacity = '0';
    
        Ong_T_trai2_OFF.style.opacity = '1';
        Ong_T_trai2_ON.style.opacity = '0';
    
        Ong_thang_doc10_OFF.style.opacity = '1';
        Ong_thang_doc10_ON.style.opacity = '0';  
      }
    }
   
    // Dieu khien van dien 2
    if (topic4 === 'ID_Device/Van_dien2') {
      var status4 = payload4;
      if (status4 === 'Van_dien2_ON') {
        console.log('Van điện 2 đã được bật');
  
        Van_giam_ap_OFF.style.opacity = '0';
        Van_giam_ap_ON.style.opacity = '1';
    
        Van_dien2_OFF.style.opacity = '0';
        Van_dien2_ON.style.opacity = '1';
    
        Ong_thang_doc3_OFF.style.opacity = '0';
        Ong_thang_doc3_ON.style.opacity = '1';
    
        Ong_L_traiduoi3_OFF.style.opacity = '0';
        Ong_L_traiduoi3_ON.style.opacity = '1';
    
        Ong_thang_ngang6_OFF.style.opacity = '0';
        Ong_thang_ngang6_ON.style.opacity = '1';
    
        Ong_thang_ngang7_OFF.style.opacity = '0';
        Ong_thang_ngang7_ON.style.opacity = '1';
    
        Ong_L_phaitren2_OFF.style.opacity = '0';
        Ong_L_phaitren2_ON.style.opacity = '1';
    
        Ong_thang_doc4_OFF.style.opacity = '0';
        Ong_thang_doc4_ON.style.opacity = '1';
    
        Ong_T_phai1_OFF.style.opacity = '0';
        Ong_T_phai1_ON.style.opacity = '1';
    
        Ong_thang_doc5_OFF.style.opacity = '0';
        Ong_thang_doc5_ON.style.opacity = '1';
    
        Ong_T_phai2_OFF.style.opacity = '0';
        Ong_T_phai2_ON.style.opacity = '1';
    
        Ong_thang_ngang9_OFF.style.opacity = '0';
        Ong_thang_ngang9_ON.style.opacity = '1';
    
        Ong_thang_ngang12_OFF.style.opacity = '0';
        Ong_thang_ngang12_ON.style.opacity = '1';
    
        Ong_thang_ngang18_OFF.style.opacity = '0';
        Ong_thang_ngang18_ON.style.opacity = '1';
    
        Ong_T_trai1_OFF.style.opacity = '0';
        Ong_T_trai1_ON.style.opacity = '1';
    
        Ong_thang_doc9_OFF.style.opacity = '0';
        Ong_thang_doc9_ON.style.opacity = '1';
    
        Ong_T_trai2_OFF.style.opacity = '0';
        Ong_T_trai2_ON.style.opacity = '1';
    
        Ong_thang_doc10_OFF.style.opacity = '0';
        Ong_thang_doc10_ON.style.opacity = '1';
    
        Ong_T_trai3_OFF.style.opacity = '0';
        Ong_T_trai3_ON.style.opacity = '1';
    
        Ong_thang_doc11_OFF.style.opacity = '0';
        Ong_thang_doc11_ON.style.opacity = '1';
    
        Ong_L_traitren1_OFF.style.opacity = '0';
        Ong_L_traitren1_ON.style.opacity = '1';
    
        Ong_thang_ngang15_OFF.style.opacity = '0';
        Ong_thang_ngang15_ON.style.opacity = '1';
    
        Ong_L_phaiduoi3_OFF.style.opacity = '0';
        Ong_L_phaiduoi3_ON.style.opacity = '1';
    
        Ong_thang_doc12_OFF.style.opacity = '0';
        Ong_thang_doc12_ON.style.opacity = '1';
    
        Ong_thang_ngang5_OFF.style.opacity = '0';
        Ong_thang_ngang5_ON.style.opacity = '1';
    
        Ong_thang_doc15_OFF.style.opacity = '0';
        Ong_thang_doc15_ON.style.opacity = '1';
    
        Ong_L_phaiduoi4_OFF.style.opacity = '0';
        Ong_L_phaiduoi4_ON.style.opacity = '1';
    
        Ong_thang_doc14_OFF.style.opacity = '0';
        Ong_thang_doc14_ON.style.opacity = '1';
    
        Ong_L_traiduoi5_OFF.style.opacity = '0';
        Ong_L_traiduoi5_ON.style.opacity = '1'; 
      }
      else if (status4 === 'Van_dien2_OFF') {
        console.log('Van điện 2 đã được tắt');
          
          Van_giam_ap_OFF.style.opacity = '1';
          Van_giam_ap_ON.style.opacity = '0';

          Van_dien2_OFF.style.opacity = '1';
          Van_dien2_ON.style.opacity = '0';

          Ong_thang_doc3_OFF.style.opacity = '1';
          Ong_thang_doc3_ON.style.opacity = '0';

          Ong_L_traiduoi3_OFF.style.opacity = '1';
          Ong_L_traiduoi3_ON.style.opacity = '0';

          Ong_thang_ngang6_OFF.style.opacity = '1';
          Ong_thang_ngang6_ON.style.opacity = '0';

          Ong_thang_ngang7_OFF.style.opacity = '1';
          Ong_thang_ngang7_ON.style.opacity = '0';

          Ong_L_phaitren2_OFF.style.opacity = '1';
          Ong_L_phaitren2_ON.style.opacity = '0';

          Ong_thang_doc4_OFF.style.opacity = '1';
          Ong_thang_doc4_ON.style.opacity = '0';

          Ong_T_phai1_OFF.style.opacity = '1';
          Ong_T_phai1_ON.style.opacity = '0';

          Ong_thang_doc5_OFF.style.opacity = '1';
          Ong_thang_doc5_ON.style.opacity = '0';

          Ong_T_phai2_OFF.style.opacity = '1';
          Ong_T_phai2_ON.style.opacity = '0';

          Ong_thang_ngang9_OFF.style.opacity = '1';
          Ong_thang_ngang9_ON.style.opacity = '0';

          Ong_thang_ngang12_OFF.style.opacity = '1';
          Ong_thang_ngang12_ON.style.opacity = '0';

          Ong_thang_ngang18_OFF.style.opacity = '1';
          Ong_thang_ngang18_ON.style.opacity = '0';

          Ong_T_trai1_OFF.style.opacity = '1';
          Ong_T_trai1_ON.style.opacity = '0';

          Ong_thang_doc9_OFF.style.opacity = '1';
          Ong_thang_doc9_ON.style.opacity = '0';

          Ong_T_trai2_OFF.style.opacity = '1';
          Ong_T_trai2_ON.style.opacity = '0';

          Ong_thang_doc10_OFF.style.opacity = '1';
          Ong_thang_doc10_ON.style.opacity = '0';

          Ong_T_trai3_OFF.style.opacity = '1';
          Ong_T_trai3_ON.style.opacity = '0';

          Ong_thang_doc11_OFF.style.opacity = '1';
          Ong_thang_doc11_ON.style.opacity = '0';

          Ong_L_traitren1_OFF.style.opacity = '1';
          Ong_L_traitren1_ON.style.opacity = '0';

          Ong_thang_ngang15_OFF.style.opacity = '1';
          Ong_thang_ngang15_ON.style.opacity = '0';

          Ong_L_phaiduoi3_OFF.style.opacity = '1';
          Ong_L_phaiduoi3_ON.style.opacity = '0';

          Ong_thang_doc12_OFF.style.opacity = '1';
          Ong_thang_doc12_ON.style.opacity = '0';

          Ong_thang_ngang5_OFF.style.opacity = '1';
          Ong_thang_ngang5_ON.style.opacity = '0';

          Ong_thang_doc15_OFF.style.opacity = '1';
          Ong_thang_doc15_ON.style.opacity = '0';

          Ong_L_phaiduoi4_OFF.style.opacity = '1';
          Ong_L_phaiduoi4_ON.style.opacity = '0';

          Ong_thang_doc14_OFF.style.opacity = '1';
          Ong_thang_doc14_ON.style.opacity = '0';

          Ong_L_traiduoi5_OFF.style.opacity = '1';
          Ong_L_traiduoi5_ON.style.opacity = '0';  
      }
    }

    // Dieu khien van tay 1
    var topic5 = message.destinationName;
    var payload5 = message.payloadString;    
    if (topic5 === 'ID_Device/Van_tay1') {
      var status5 = payload5;
      if (status5 === 'Van_tay1_ON') {
        console.log('Van tay 1 đã được bật');
        // // Thực hiện hành động khi đèn được bật
        // // Ví dụ: Thay đổi hình ảnh đèn bật, hiển thị thông báo trạng thái, v.v.
        // Bom2_OFF.style.opacity = '0';
        // Bom2_ON.style.opacity = '1';
        // Van_dien2_OFF.style.opacity = '0';
        // Van_dien2_ON.style.opacity = '1';  
      }
      else if (status5 === 'Van_tay1_OFF') {
        console.log('Van tay 1 đã được tắt');
        // // Thực hiện hành động khi đèn được tắt
        // // Ví dụ: Thay đổi hình ảnh đèn tắt, hiển thị thông báo trạng thái, v.v.
        // Bom2_OFF.style.opacity = '1';
        // Bom2_ON.style.opacity = '0';
        // Van_dien2_OFF.style.opacity = '1';
        // Van_dien2_ON.style.opacity = '0';   
      }
    }

    var topic6 = message.destinationName;
    var payload6 = message.payloadString;    
    if (topic6 === 'ID_Device/Van_tay2') {
      var status6 = payload6;
      if (status6 === 'Van_tay2_ON') {
        console.log('Van tay 2 đã được bật');
        // // Thực hiện hành động khi đèn được bật
        // // Ví dụ: Thay đổi hình ảnh đèn bật, hiển thị thông báo trạng thái, v.v.
        // Bom2_OFF.style.opacity = '0';
        // Bom2_ON.style.opacity = '1';
        // Van_dien2_OFF.style.opacity = '0';
        // Van_dien2_ON.style.opacity = '1';  
      }
      else if (status6 === 'Van_tay2_ON') {
        console.log('Van tay 2 đã được tắt');
        // // Thực hiện hành động khi đèn được tắt
        // // Ví dụ: Thay đổi hình ảnh đèn tắt, hiển thị thông báo trạng thái, v.v.
        // Bom2_OFF.style.opacity = '1';
        // Bom2_ON.style.opacity = '0';
        // Van_dien2_OFF.style.opacity = '1';
        // Van_dien2_ON.style.opacity = '0';   
      }
    }

    var topic7 = message.destinationName;
    var payload7 = message.payloadString;    
    if (topic7 === 'ID_Device/Van_tay3') {
      var status7 = payload7;
      if (status7 === 'Van_tay3_ON') {
        console.log('Van tay 3 đã được bật');
        // // Thực hiện hành động khi đèn được bật
        // // Ví dụ: Thay đổi hình ảnh đèn bật, hiển thị thông báo trạng thái, v.v.
        // Bom2_OFF.style.opacity = '0';
        // Bom2_ON.style.opacity = '1';
        // Van_dien2_OFF.style.opacity = '0';
        // Van_dien2_ON.style.opacity = '1';  
      }
      else if (status7 === 'Van_tay3_OFF') {
        console.log('Van tay 3 đã được tắt');
        // // Thực hiện hành động khi đèn được tắt
        // // Ví dụ: Thay đổi hình ảnh đèn tắt, hiển thị thông báo trạng thái, v.v.
        // Bom2_OFF.style.opacity = '1';
        // Bom2_ON.style.opacity = '0';
        // Van_dien2_OFF.style.opacity = '1';
        // Van_dien2_ON.style.opacity = '0';   
      }
    }
 var mypH = message.destinationName;
 var payload10 = message.payloadString;
  if (mypH === 'Conglike/analog') {
  var pH = payload10;  
  document.getElementById("mypH").innerHTML = pH;
  if(pH >0){
    console.log('Analog da nhan' + pH); 
  } 
}
};

    // Xử lý phản hồi điều khiển
  // Khi kết nối MQTT thành công, đăng ký lắng nghe phản hồi điều khiển
  // Khi kết nối MQTT thành công, đăng ký lắng nghe phản hồi điều khiển
  //Phan doi mau khi nhan ON/OFF tren web da chay duoc doi xu li topic de nhan tu LED 2

function moveTable(x, y) {
  var table = document.getElementById("myTable");
  table.style.left = 100 + "px";
  table.style.top = 100 + "px";
}

function updateTime() {
  var time = new Date();
  document.getElementById("time").innerHTML = time.toLocaleString();
}
setInterval(updateTime, 1000); // Update the time every second



// //Van tay 1
// document.getElementById('Van_tay1').addEventListener('change', function() {
//   if (this.checked) {

//     Van_giam_ap_OFF.style.opacity = '0';
//     Van_giam_ap_ON.style.opacity = '1';

//     Ong_thang_doc3_OFF.style.opacity = '0';
//     Ong_thang_doc3_ON.style.opacity = '1';

//     Ong_L_traiduoi3_OFF.style.opacity = '0';
//     Ong_L_traiduoi3_ON.style.opacity = '1';

//     Ong_thang_ngang6_OFF.style.opacity = '0';
//     Ong_thang_ngang6_ON.style.opacity = '1';

//     Ong_thang_ngang7_OFF.style.opacity = '0';
//     Ong_thang_ngang7_ON.style.opacity = '1';

//     Ong_L_phaitren2_OFF.style.opacity = '0';
//     Ong_L_phaitren2_ON.style.opacity = '1';

//     Ong_thang_doc4_OFF.style.opacity = '0';
//     Ong_thang_doc4_ON.style.opacity = '1';

//     Ong_T_phai1_OFF.style.opacity = '0';
//     Ong_T_phai1_ON.style.opacity = '1';

//     Ong_thang_doc5_OFF.style.opacity = '0';
//     Ong_thang_doc5_ON.style.opacity = '1';

//     Ong_T_phai2_OFF.style.opacity = '0';
//     Ong_T_phai2_ON.style.opacity = '1';

//     var message = new Paho.MQTT.Message("Van_tay1_ON");
//     message.destinationName = mqttTopic5;
//     client.send(message);
//     console.log("Sent ON message to MQTT broker");
//   } else {
//     Van_tay1_OFF.style.opacity = '1';
//     Van_tay1_ON.style.opacity = '0';
//     var message = new Paho.MQTT.Message("Van_tay1_OFF");
//     message.destinationName = mqttTopic5;
//     client.send(message);
//     console.log("Sent OFF message to MQTT broker");
//   }
// });

// //Van tay 2
// document.getElementById('Van_tay2').addEventListener('change', function() {
//   if (this.checked) {
//     Van_tay2_OFF.style.opacity = '0';
//     Van_tay2_ON.style.opacity = '1';
//     var message = new Paho.MQTT.Message("Van_tay2_ON");
//     message.destinationName = mqttTopic6;
//     client.send(message);
//     console.log("Sent ON message to MQTT broker");
    
//   } else {
//     Van_tay2_OFF.style.opacity = '1';
//     Van_tay2_ON.style.opacity = '0';
//     var message = new Paho.MQTT.Message("Van_tay2_OFF");
//     message.destinationName = mqttTopic6;
//     client.send(message);
//     console.log("Sent OFF message to MQTT broker");
  
//   }
// });

// //Van tay 3
// document.getElementById('Van_tay3').addEventListener('change', function() {
//   if (this.checked) {
//     Van_tay3_OFF.style.opacity = '0';
//     Van_tay3_ON.style.opacity = '1';
//     var message = new Paho.MQTT.Message("Van_tay3_ON");
//     message.destinationName = mqttTopic7;
//     client.send(message);
//     console.log("Sent ON message to MQTT broker");
//   } else {
//     Van_tay3_OFF.style.opacity = '1';
//     Van_tay3_ON.style.opacity = '0';
//     var message = new Paho.MQTT.Message("Van_tay3_OFF");
//     message.destinationName = mqttTopic7;
//     client.send(message);
//     console.log("Sent OFF message to MQTT broker"); 
//   }
// });




