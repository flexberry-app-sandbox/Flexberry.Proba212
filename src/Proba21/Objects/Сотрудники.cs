﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proba21
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сотрудники.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудники CustomAttributes)

    // *** End programmer edit section *** (Сотрудники CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникиE", new string[] {
            "IDСотр as \'I d сотр\'",
            "ФИОСотруд as \'Ф и о сотруд\'",
            "ДолжнСотр as \'Должн сотр\'",
            "ДолжнСотр.Должность as \'Должность\'"}, Hidden=new string[] {
            "ДолжнСотр.Должность"})]
    [MasterViewDefineAttribute("СотрудникиE", "ДолжнСотр", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Должность")]
    [View("СотрудникиL", new string[] {
            "IDСотр as \'I d сотр\'",
            "ФИОСотруд as \'Ф и о сотруд\'",
            "ДолжнСотр.Должность as \'Должность\'"})]
    public class Сотрудники : ICSSoft.STORMNET.DataObject
    {
        
        private int fIDСотр;
        
        private string fФИОСотруд;
        
        private IIS.Proba21.ДолжнСотр fДолжнСотр;
        
        // *** Start programmer edit section *** (Сотрудники CustomMembers)

        // *** End programmer edit section *** (Сотрудники CustomMembers)

        
        /// <summary>
        /// IDСотр.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.IDСотр CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.IDСотр CustomAttributes)
        public virtual int IDСотр
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.IDСотр Get start)

                // *** End programmer edit section *** (Сотрудники.IDСотр Get start)
                int result = this.fIDСотр;
                // *** Start programmer edit section *** (Сотрудники.IDСотр Get end)

                // *** End programmer edit section *** (Сотрудники.IDСотр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.IDСотр Set start)

                // *** End programmer edit section *** (Сотрудники.IDСотр Set start)
                this.fIDСотр = value;
                // *** Start programmer edit section *** (Сотрудники.IDСотр Set end)

                // *** End programmer edit section *** (Сотрудники.IDСотр Set end)
            }
        }
        
        /// <summary>
        /// ФИОСотруд.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.ФИОСотруд CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.ФИОСотруд CustomAttributes)
        [StrLen(255)]
        public virtual string ФИОСотруд
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.ФИОСотруд Get start)

                // *** End programmer edit section *** (Сотрудники.ФИОСотруд Get start)
                string result = this.fФИОСотруд;
                // *** Start programmer edit section *** (Сотрудники.ФИОСотруд Get end)

                // *** End programmer edit section *** (Сотрудники.ФИОСотруд Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.ФИОСотруд Set start)

                // *** End programmer edit section *** (Сотрудники.ФИОСотруд Set start)
                this.fФИОСотруд = value;
                // *** Start programmer edit section *** (Сотрудники.ФИОСотруд Set end)

                // *** End programmer edit section *** (Сотрудники.ФИОСотруд Set end)
            }
        }
        
        /// <summary>
        /// Сотрудники.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.ДолжнСотр CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.ДолжнСотр CustomAttributes)
        [PropertyStorage(new string[] {
                "ДолжнСотр"})]
        [NotNull()]
        public virtual IIS.Proba21.ДолжнСотр ДолжнСотр
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.ДолжнСотр Get start)

                // *** End programmer edit section *** (Сотрудники.ДолжнСотр Get start)
                IIS.Proba21.ДолжнСотр result = this.fДолжнСотр;
                // *** Start programmer edit section *** (Сотрудники.ДолжнСотр Get end)

                // *** End programmer edit section *** (Сотрудники.ДолжнСотр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.ДолжнСотр Set start)

                // *** End programmer edit section *** (Сотрудники.ДолжнСотр Set start)
                this.fДолжнСотр = value;
                // *** Start programmer edit section *** (Сотрудники.ДолжнСотр Set end)

                // *** End programmer edit section *** (Сотрудники.ДолжнСотр Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиE", typeof(IIS.Proba21.Сотрудники));
                }
            }
            
            /// <summary>
            /// "СотрудникиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиL", typeof(IIS.Proba21.Сотрудники));
                }
            }
        }
    }
}
