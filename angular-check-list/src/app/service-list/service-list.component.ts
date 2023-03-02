import { Component } from '@angular/core';

interface ServiceItem {
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent {
  services: ServiceItem[] = [
    { name: 'Web Development', price: 300, checked: false },
    { name: 'Design', price: 400, checked: false },
    { name: 'Integration', price: 250.00, checked: false },
    { name: 'Training', price: 220.00, checked: false }
  ];

  total: number = 0;

  updateTotal() {
    this.total = this.services.reduce((sum, service) => {
        if (service.checked) {
          sum + service.price
        } 

        return sum;
      }, 0);
  }

  onServiceClick(service: ServiceItem) {
    service.checked = !service.checked;
    this.updateTotal();
  }
}
