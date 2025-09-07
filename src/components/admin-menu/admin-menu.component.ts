import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/services/common/common';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-admin-menu',
    templateUrl: './admin-menu.component.html',
    styleUrls: ['./admin-menu.component.scss'],
    standalone: false
})
export class AdminMenuComponent implements OnInit {
  public selectedIndex = 0;
  public logOutTitle = 'Log Out';
  public appVersion!: string;
  public userName!: string;
  public userRole!: string;
  public appPages = [
    {
      category: '',
      isExpanded: true,
      role: 'TO,SA,RP,SP',
      pages: [
        
        {
          title: 'Home',
          url: 'statistics',
          icon: '../assets/icon/home.png',
          isDisabled: false
        }
      ],
    },
    {
      category: 'App Usage',
      isExpanded: false,
      role: 'TO,SA,SP,RP',
      pages: [
        {
          title: 'Monthly Members Transactions',
          url: 'monthlyAppUsersTxns',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Customer Reviews',
          url: 'customerReviews',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'App Installs',
          url: 'appInstalls',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        }
      ]
    },
    {
      category: 'Customer Reports',
      isExpanded: false,
      role: 'TO,SA,SP,RP',
      pages: [
        {
          title: 'Customers Registrations',
          url: 'customersCreatedByDevice',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Customers Registrations by Device Type',
          url: 'customerRegistrationByDevice',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Customers by Location',
          url: 'customersByLocation',
          icon: '../assets/icon/report.png',
          isDisabled: true,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Customers by Station',
          url: 'customersByStation',
          icon: '../assets/icon/report.png',
          isDisabled: true,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'OC Active Customers',
          url: 'ocCustomers',
          icon: '../assets/icon/report.png',
          isDisabled: true,
          role: 'TO'
        },
        {
          title: 'CTR Customers Birthdays',
          url: 'customer-ctr-birthdays',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Customer Changes',
          url: 'customer-changes',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Phone Verify & Customer Logins',
          url: 'customer-login-attempts',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Email Verify',
          url: 'email-verification',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Top Customers by Sales',
          url: 'topCustomers',
          icon: '../assets/icon/report.png',
          isDisabled: true,
          role: 'TO,SA,RP'
        }
      ]
    },
    {
      category: 'Pay Methods Reports',
      isExpanded: false,
      role: 'TO,SA,SP,RP',
      pages: [
        {
          title: 'Success % by Pay Method',
          url: 'transactionSuccessRates',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Gift Card Balances',
          url: 'giftCardBalances',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Gift Card Balances - Bulk',
          url: 'giftCardBalancesV0',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Payment Type Stats',
          url: 'newAccounts',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,RP'
        },
        {
          title: 'Card Provision Stats',
          url: 'cardProvisionStats',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,RP'
        },
        {
          title: 'PMT Methods Stats',
          url: 'pmtMethods',
          icon: '../assets/icon/report.png',
          isDisabled: true,
          role: 'TO,SA,RP'
        }
      ]
    },
    {
      category: 'Station Reports',
      isExpanded: false,
      role: 'TO,SA,SP,RP',
      pages: [
        {
          title: 'Success % by Station',
          url: 'stationSuccessRates',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Transactions By State',
          url: 'txnsByState',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'MPPA Updates',
          url: 'mppa-report',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Switched Stations Success %',
          url: 'p97StnSuccessRates',
          icon: '../assets/icon/report.png',
          isDisabled: true,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'OC Rewards Events by Station',
          url: 'rewardsByStation',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,RP,SP'
        },
        {
          title: 'CTR Receipts by Station',
          url: 'ctrStationSuccessRates',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,RP,SP'
        },
        {
          title: 'Zero Charge Receipts by Station',
          url: 'zeroChargeByStation',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,RP,SP'
        },
        {
          title: 'Fuel Prices by Station',
          url: 'cashCreditDiscounts',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Stations Near By',
          url: 'stationsNearBy',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Top Stations by Sales',
          url: 'topStations',
          icon: '../assets/icon/report.png',
          isDisabled: true,
          role: 'TO,SA,RP'
        },
        {
          title: 'Sales by Station',
          url: 'stationSales',
          icon: '../assets/icon/report.png',
          isDisabled: true,
          role: 'TO,SA,RP'
        }
      ]
    },
    {
      category: 'Rewards',
      isExpanded: false,
      role: 'TO,SA,SP,RP',
      pages: [
        {
          title: 'Earn Campaigns',
          url: 'earn-campaigns',
          icon: '../assets/icon/loyalty.png',
          isDisabled: true,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'OC Rewards Events by Station',
          url: 'rewardsByStation',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,RP,SP'
        },
        {
          title: 'CTR Receipts by Station',
          url: 'ctrStationSuccessRates',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,RP,SP'
        },
        {
          title: 'Promo Codes',
          url: 'promoCodes',
          icon: '../assets/icon/promo.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Loyalty Partner Offers',
          url: 'loyaltyPartnerOffers',
          icon: '../assets/icon/loyaltyPartner.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        }
      ]
    },
    {
      category: 'Exceptions',
      isExpanded: false,
      role: 'TO,SA,SP,RP',
      pages: [
        {
          title: 'Age / ID Verify Failures',
          url: 'ageVerifyFails',
          icon: '../assets/icon/redSmall.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Complete Profile Attempts',
          url: 'completeProfileFails',
          icon: '../assets/icon/redSmall.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Promo Codes Failures',
          url: 'promoCodeFails',
          icon: '../assets/icon/redSmall.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Card Provision Failures',
          url: 'cardProvisionFails',
          icon: '../assets/icon/redSmall.png',
          isDisabled: false,
          role: 'TO,SA,RP'
        },
        {
          title: 'Slow Transactions',
          url: 'slowTransactions',
          icon: '../assets/icon/redSmall.png',
          isDisabled: false,
          role: 'TO,SA,RP'
        }
      ]
    },
    {
      category: 'Potential Fraud',
      isExpanded: false,
      role: 'TO,SA,SP,RP',
      pages: [
        {
          title: 'Devices multiple Accounts',
          url: 'devicesMultipleAccounts',
          icon: '../assets/icon/devices.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        }
      ]
    },
    {
      category: 'Trend Reports',
      isExpanded: false,
      role: 'TO,SA,RP,SP',
      pages: [
        {
          title: 'New Customers',
          url: 'customersTrend',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Transactions',
          url: 'transactionsTrend',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'New Payment Accounts',
          url: 'newAccountsTrend',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Success % by Pay Method',
          url: 'pmtSuccessRatesTrend',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'MPPA Updates',
          url: 'mppaSwitchesTrend',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,SP,RP'
        },
        {
          title: 'Transactions Response Times',
          url: 'transactionsResponseTimesTrend',
          icon: '../assets/icon/report.png',
          isDisabled: true,
          role: 'TO,SA,SP,RP'
        }
      ]
    },
    {
      category: 'Chatbot Maintenance',
      isExpanded: false,
      role: 'TO,SA,RP',
      pages: [
        {
          title: 'Categories',
          url: 'chatCategories',
          icon: '../assets/icon/form.png',
          isDisabled: false,
          role: 'TO,SA'
        },
        {
          title: 'Issues / Symptoms',
          url: 'chatIssues',
          icon: '../assets/icon/form.png',
          isDisabled: false,
          role: 'TO,SA'
        },
        {
          title: 'System Checks',
          url: 'chatSysChecks',
          icon: '../assets/icon/form.png',
          isDisabled: false,
          role: 'TO,SA'
        },
        {
          title: 'Recommendations',
          url: 'chatRecommendations',
          icon: '../assets/icon/form.png',
          isDisabled: false,
          role: 'TO,SA'
        },
        {
          title: 'Map Issues & Sys Checks',
          url: 'chatIssuesSysChecks',
          icon: '../assets/icon/form.png',
          isDisabled: false,
          role: 'TO,SA'
        },
        {
          title: 'Flows Ratings & feedback',
          url: 'chatFlowsRating',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,RP'
        },
        {
          title: 'Chat Sessions',
          url: 'chatSessions',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA,RP'
        }
      ]
    },
    {
      category: 'Data Maintenance',
      isExpanded: false,
      role: 'TO,SA,RP,SP',
      pages: [
        {
          title: 'Upload HB File / Enable MP',
          url: 'switch-mppa',
          icon: '../assets/icon/upload.png',
          isDisabled: false,
          role: 'TO,SA'
        },
        {
          title: 'Upload Stations with Mangled MPPA Ids',
          url: 'upload-mangled',
          icon: '../assets/icon/upload.png',
          isDisabled: false,
          role: 'TO,SA'
        },
        {
          title: 'Upload Stations - Pay Inside',
          url: 'upload-payInside',
          icon: '../assets/icon/upload.png',
          isDisabled: false,
          role: 'TO,SA'
        },
        {
          title: 'Inactive Stations',
          url: 'inactiveStations',
          icon: '../assets/icon/switch.png',
          isDisabled: false,
          role: 'TO,SA'
        },
        {
          title: 'Stations with disabled Mobile Payment',
          url: 'disabledMPStations',
          icon: '../assets/icon/switch.png',
          isDisabled: false,
          role: 'TO,SA,RP,SP'
        },
        {
          title: 'Users',
          url: 'supportUsers',
          icon: '../assets/icon/visitors.png',
          isDisabled: false,
          role: 'TO,SA'
        },
        {
          title: 'Groups',
          url: 'supportGroups',
          icon: '../assets/icon/companies.png',
          isDisabled: false,
          role: 'TO,SA'
        },
        {
          title: 'Sync App Reviews',
          url: 'syncAppReviews',
          icon: '../assets/icon/switch.png',
          isDisabled: false,
          role: 'TO,SA'
        },
        {
          title: 'Sync App Installs',
          url: 'syncAppInstalls',
          icon: '../assets/icon/switch.png',
          isDisabled: false,
          role: 'TO,SA'
        }
      ]
    },
    {
      category: 'HDA Usage',
      isExpanded: false,
      role: 'TO,SA',
      pages: [
        {
          title: 'HDA Login Attempts',
          url: 'login-attempts',
          icon: '../assets/icon/visitors.png',
          isDisabled: false,
          role: 'TO,SA'
        },
        {
          title: 'HDA Logins By Group',
          url: 'loginsByGroup',
          icon: '../assets/icon/visitors.png',
          isDisabled: false,
          role: 'TO,SA'
        },
        {
          title: 'HDA Queries By User',
          url: 'queriesByUser',
          icon: '../assets/icon/report.png',
          isDisabled: false,
          role: 'TO,SA'
        },
        {
          title: 'Connected Devices',
          url: 'devices',
          icon: '../assets/icon/devices.png',
          isDisabled: true,
          role: 'TO,SA'
        }
      ]
    },
    {
      category: '',
      isExpanded: true,
      pages: [
        {
          title: 'Terms & Conditions',
          url: 'terms',
          icon: '../assets/icon/terms.png',
          isDisabled: false
        },
        {
          title: 'Change Password',
          url: 'edit-profile',
          icon: '../assets/icon/switch.png',
          isDisabled: false
        },
        {
          title: this.logOutTitle,
          url: 'home',
          icon: '../assets/icon/exit.png',
        }
      ]
    }
  ];

  constructor(
    private router: Router,
    private common: CommonService,
    public menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.appVersion = this.common.getAppVersion();
    
  }

  goToPage(page: any) {
    
    if (!page.isDisabled) {
      this.menuCtrl.close();
      this.router.navigate([page.url]);
    } else {
      this.common.presentToastTop('This page is still work in progress!');
    }
  }



  expandCollapse(categ: any) {
    categ.isExpanded = !categ.isExpanded;
  }

  isAuthorized(pageRole: string): boolean {
    let isAuth: boolean;
    if (pageRole == null || pageRole == undefined) {
      isAuth = true;
    } else {
      let authorizedRoles = pageRole.split(',');
      if (authorizedRoles.find(x=>x == this.userRole) != null 
      && authorizedRoles.find(x=>x == this.userRole) != undefined) {
        isAuth = true;
      } else {
        isAuth = false;
      }
    }
    return isAuth;
  }
}
