// import { ExpandableRow } from '../models/expandableRow.model';
// import { NotificationIcon } from './notificationIcon.model';
// import { NotificationType } from './notificationType.model';
// import { RowNotification } from './rowNotification.model';

// describe('[ExpandableRow]', () => {
//     const wrappedObject = { name: 'Some name', value: 'Some value' };
//     const expandableRow = new ExpandableRow<any, any>(wrappedObject);
//     describe('When constructed', () => {
//         it('wrapped object is stored in preview object', () => {
//             expect(expandableRow.previewObject).toBe(wrappedObject);
//         });
//         describe('When showNotificationOnCollapse is called', () => {
//             beforeEach(() => {
//                 expandableRow.notifyOnCollapse('Collapsed', 'vgr-icon-ok-check');
//             });
//             // it('notification is set to notify on collapse', () => {
//             //     expect(expandableRow.notification).toEqual(
//             //         { type: NotificationType.ShowOnCollapse, icon: 'vgr-icon-ok-check', message: 'Collapsed' } as RowNotification);
//             // });
//         });
//         describe('When showNotificationOnRemove is called', () => {
//             beforeEach(() => {
//                 expandableRow.notifyOnRemove('Removed', 'vgr-icon-ok-check');
//             });
//             // it('notification is set to notify on remove', () => {
//             //     expect(expandableRow.notification).toEqual(
//             //         { type: NotificationType.ShowOnRemove, icon: 'vgr-icon-ok-check', message: 'Removed' } as RowNotification);
//             // });
//         });
//     });
// });

