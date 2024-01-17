import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  imageUrl: string = 'https://images.pexels.com/photos/633437/pexels-photo-633437.jpeg?auto=compress&cs=tinysrgb&w=600';
  title: string = 'Como as borboletas monarcas escapam de seus predadores? Descubra 3 características marcantes sobre elas';
  description: string = "Única em sua espécie, a borboleta monarca (Danaus plexippus) cativa com suas asas alaranjadas, com manchas brancas e listras pretas que se estendem pelo corpo. Sua elegância distinta de voo faz dela um espetáculo fascinante da natureza.\nAs monarcas são uma das borboletas mais reconhecidas e mais bem estudadas do planeta. Invertebradas e herbívoras, elas se caracterizam por sua migração sazonal: durante o inverno, milhões delas migram dos Estados Unidos e do Canadá para o sul da Califórnia e do México."

}
