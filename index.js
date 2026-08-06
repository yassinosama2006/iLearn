  let currentLang = 'ar';
        let notificationsList = [{ id: 1, text: "🚀 شحن سريع لجميع المحافظات + شراء فورى لأكواد المنصات التعليمية!" }];

        const translations = {
            ar: {
                announcement: "🚀 شحن سريع لجميع المحافظات + شراء فورى لأكواد المنصات التعليمية!",
                navHome: "الرئيسية",
                navBooks: "الكتب والملخصات",
                navCodes: "أكواد المدرسين 🔥",
                navCheckout: "إتمام الشراء",
                navOrders: "طلباتي 📦",
                navAdmin: "لوحة الأدمن ⚙️",
                badgeText: "المتجر الأول لطلاب الثانوية العامة",
                homeTitleFirst: "بوابتك نحو",
                homeTitleHighlight: "التفوق",
                homeTitleLast: "في الثانوية",
                homeSubtitle: "اختر المادة ثم المدرس المفضل لديك، واطلب كتبك أو أكوادك التعليمية فورياً.",
                browseBtn: "تصفح الكتب والملازم",
                codesBtn: "أكواد المنصات",
                floatTitle: "اختر المادة والمدرس",
                floatSubtitle: "بكل سهولة وسرعة",
                statLbl1: "طالب يثق بنا",
                statLbl2: "ملزمة وكتاب متاح",
                statLbl3: "تسليم فورى للأكواد",
                feat1Title: "أكواد فورية",
                feat1Desc: "استلم كود الشرح أو المراجعة مباشرة بعد الدفع.",
                feat2Title: "توصيل سريع",
                feat2Desc: "شحن المذكرات والكتب لجميع المحافظات خلال 24 - 48 ساعة.",
                feat3Title: "دفع إلكتروني سهل",
                feat3Desc: "ادفع عن طريق الفيزا أو المحفظة الإلكترونية بسهولة وآمان.",
                booksTitle: "المكتبة الرقمية والملخصات",
                booksSub: "اختر المادة أولاً، ثم حدد المدرس لعرض ملازمه وكتبه",
                catAr: "عربي",
                catChem: "كيمياء",
                catEng: "انجليش",
                catHist: "تاريخ",
                catMath: "ماث / رياضيات",
                catPhys: "فيزياء",
                catProg: "برمجه",
                catBio: "بايو / أحياء",
                codeCatAr: "عربي",
                codeCatChem: "كيمياء",
                codeCatEng: "انجليش",
                codeCatHist: "تاريخ",
                codeCatMath: "ماث / رياضيات",
                codeCatPhys: "فيزياء",
                codeCatProg: "برمجه",
                codeCatBio: "بايو / أحياء",
                backBooksBtn: "الرجوع لاختيار المواد والمدرسين",
                selectedBookTeacherTitle: "كتب وملازم المدرس",
                codesTitle: "أكواد منصات المدرسين",
                codesSub: "اختر المادة، ثم اختر المدرس لشراء أكواد الحصص والاشتراكات فورياً",
                backCodesBtn: "الرجوع لاختيار المواد والمدرسين",
                selectedCodeTeacherTitle: "أكواد ومحاضرات المدرس",
                codeCheckTitle: "شراء كود المنصة الفوري ⚡",
                codeCheckSub: "ادفع فوراً واستلم الكود مباشرة في منتصف الشاشة بدون انتظار",
                codeCheckDetailsTitle: "تفاصيل الكود المطلوب",
                codePayMethodTitle: "اختر طريقة الدفع الفوري:",
                subVisa: "بطاقة ائتمانية / دفع آمن عبر Paymob",
                subWallet: "محفظة إلكترونية",
                codeVisaTitle: "إدخال بيانات الكارت",
                codeWalletTitle: "إدخال بيانات المحفظة",
                btnInstantPay: "إتمام الدفع واستلام الكود فوراً",
                chkSec1: "1. Customer Information",
                chkSec2: "2. Shipping Address",
                chkSec3: "3. Payment Method",
                optCityDefault: "City | المدينة",
                chkVisaTitle: "إدخال بيانات الكارت",
                chkWalletTitle: "إدخال بيانات المحفظة",
                sumTitle: "Order Summary",
                lblSubtotal: "Subtotal",
                lblShipping: "Shipping",
                lblTotal: "Total",
                ordersTitle: "قائمة طلباتي 📦",
                ordersSub: "تتبع طلباتك السابقة والشحنات الحالية بسهولة",
                adminTitle: "لوحة تحكم الأدمن",
                adminSub: "إدارة المنتجات، أكواد المدرسين، ومستخدمي النظام بالكامل",
                adminStat1: "إجمالي المستخدمين",
                adminStat2: "إجمالي الكتب",
                adminStat3: "الأكواد المتاحة",
                admTab1: "المستخدمين",
                admTab2: "الكتب والملخصات",
                admTab3: "أكواد المدرسين",
                admUsersTitle: "قائمة مستخدمي المنصة والصلاحيات",
                thUser1: "اسم المستخدم",
                thUser2: "البريد الإلكتروني",
                thUser3: "الصلاحية الحالية",
                thUser4: "إجراء التبديل",
                admBookAddTitle: "إضافة كتاب أو ملزمة جديدة للمكتبة",
                lblBookImg: "اختر صورة الكتاب من جهازك:",
                btnAddBookSubmit: "إضافة الكتاب للمتجر",
                admBooksListTitle: "قائمة الكتب الحالية وإدارتها",
                thBook1: "الصورة",
                thBook2: "عنوان الكتاب",
                thBook3: "المادة",
                thBook4: "السعر",
                thBook5: "الإجراءات",
                admCodeAddTitle: "إضافة كود مدرس جديد",
                lblCodeImg: "اختر صورة الغلاف للكود من جهازك:",
                btnAddCodeSubmit: "إضافة الكود للمتجر",
                admCodesListTitle: "قائمة أكواد المدرسين الحالية وإدارتها",
                thCode1: "الصورة",
                thCode2: "عنوان الكود",
                thCode3: "المادة",
                thCode4: "السعر",
                thCode5: "الإجراءات",
                admNotifHeading: "نشر إشعار أو تنبيه جديد للطلاب",
                admNotifSubmitBtn: "نشر الإشعار فوراً",
                cartDrawerTitle: "سلة المشتريات",
                cartEmptyText: "السلة فارغة حالياً",
                cartTotalLbl: "الإجمالي:",
                cartCheckoutBtn: "إتمام شراء الكتب",
                contactTitle: "اتصل بنا",
                contactSub: "نحن هنا دائماً للإجابة على استفساراتك وخدمتك بأفضل شكل ممكن",
                cEmailLbl: "البريد الإلكتروني",
                cPhoneLbl: "خدمة العملاء / واتساب",
                cAddrLbl: "العنوان المقر الرئيسي",
                cAddrVal: "القاهرة، مصر",
                contactLblName: "الاسم بالكامل",
                contactInName: "أدخل اسمك",
                contactLblEmail: "البريد الإلكتروني",
                contactInEmail: "أدخل بريدك الإلكتروني",
                contactLblSubj: "موضوع الاستفسار",
                contactInSubj: "أدخل موضوع الرسالة",
                contactLblMsg: "تفاصيل الرسالة",
                contactInMsg: "اكتب استفسارك هنا...",
                contactSubmitBtn: "إرسال الرسالة",
                footerDesc: "المتجر الأول والرائد لتوفير الكتب الخارجية وملازم المدرسين وأكواد منصات الثانوية العامة في مصر فورياً وبأعلى جودة وسرعة تامة.",
                fCol1Title: "روابط سريعة",
                fLink1: "الرئيسية",
                fLink2: "الكتب والملخصات",
                fLink3: "أكواد المدرسين",
                fCol2Title: "الدعم والمساعدة",
                fLink4: "طلباتي وشحناتي",
                fLink5: "سياسة الشحن والتوصيل",
                fLink6: "حسابي الشخصي",
                fLink7: "اتصل بنا",
                fCol3Title: "تواصل معنا",
                fAddr: "القاهرة، مصر - شحن لجميع المحافظات",
                fCopy: "جميع الحقوق محفوظة © 2026 KAAF STORE",
                fSub: "صُمم خصيصاً لطلاب الثانوية العامة في مصر ⚡",
                popTitle: "تم شراء الكود بنجاح!",
                popDesc: "إليك كود التفعيل الخاص بك، يمكنك نسخ واستخدامه فوراً داخل المنصة:",
                popCopyBtn: "نسخ الكود",
                popOkBtn: "فهمت",
                logoutModalTitle: "تسجيل الخروج",
                logoutModalMessage: "هل ترغب في تسجيل الخروج من الحساب؟",
                logoutYesBtn: "نعم، خروج",
                logoutCancelBtn: "إلغاء",
                trackModalHeader: "تتبع الشحنة",
                lblTrackAddr: "عنوان الشحن:",
                lblTrackPay: "طريقة الدفع:",
                tStep1Title: "تم تأكيد الطلب والدفع",
                tStep1Desc: "تم استلام طلبك وجاري مراجعته",
                tStep2Title: "جاري تجهيز الشحنة",
                tStep2Desc: "يتم الآن تغليف طلبك وتجهيزه للخروج",
                tStep3Title: "تم التسليم لشركة الشحن",
                tStep3Desc: "الشحنة في الطريق إليك الآن",
                tStep4Title: "تم التوصيل",
                tStep4Desc: "تم توصيل الطلب بنجاح إلى عنوانك",
                trackCloseBtn: "إغلاق",
                loginTabBtn: "تسجيل الدخول",
                signupTabBtn: "إنشاء حساب جديد",
                btnLoginSubmit: "دخول للمنصة",
                btnSignupSubmit: "إنشاء الحساب فوراً",
                notifBoxTitle: "الإشعارات والتنبيهات",
                notifClearBtn: "حذف الكل",
                notifWelcomeText: "مرحباً بك في متجر كاف ستور! تصفح أفضل الكتب والأكواد التعليمية."
            },
            en: {
                announcement: "🚀 Fast shipping to all governorates + Instant purchase for educational platform codes!",
                navHome: "Home",
                navBooks: "Books & Summaries",
                navCodes: "Teacher Codes 🔥",
                navCheckout: "Checkout",
                navOrders: "My Orders 📦",
                navAdmin: "Admin Panel ⚙️",
                badgeText: "The #1 Store for High School Students",
                homeTitleFirst: "Your Gateway to",
                homeTitleHighlight: "Excellence",
                homeTitleLast: "in High School",
                homeSubtitle: "Choose your subject and favorite teacher, and order your books or educational codes instantly.",
                browseBtn: "Browse Books & Summaries",
                codesBtn: "Platform Codes",
                floatTitle: "Choose Subject & Teacher",
                floatSubtitle: "Quickly and Easily",
                statLbl1: "Trusted Students",
                statLbl2: "Available Books",
                statLbl3: "Instant Code Delivery",
                feat1Title: "Instant Codes",
                feat1Desc: "Receive your explanation or review code right after payment.",
                feat2Title: "Fast Delivery",
                feat2Desc: "Shipping notes and books to all governorates within 24-48 hours.",
                feat3Title: "Easy Online Payment",
                feat3Desc: "Pay via Visa or Mobile Wallet safely and easily.",
                booksTitle: "Digital Library & Summaries",
                booksSub: "Select the subject first, then choose the teacher to view their notes and books",
                catAr: "Arabic",
                catChem: "Chemistry",
                catEng: "English",
                catHist: "History",
                catMath: "Math",
                catPhys: "Physics",
                catProg: "Programming",
                catBio: "Biology",
                codeCatAr: "Arabic",
                codeCatChem: "Chemistry",
                codeCatEng: "English",
                codeCatHist: "History",
                codeCatMath: "Math",
                codeCatPhys: "Physics",
                codeCatProg: "Programming",
                codeCatBio: "Biology",
                backBooksBtn: "Back to Subjects & Teachers",
                selectedBookTeacherTitle: "Teacher's Books & Notes",
                codesTitle: "Teacher Platform Codes",
                codesSub: "Choose the subject, then pick the teacher to buy session codes and subscriptions instantly",
                backCodesBtn: "Back to Subjects & Teachers",
                selectedCodeTeacherTitle: "Teacher's Codes & Lectures",
                codeCheckTitle: "Instant Platform Code Purchase ⚡",
                codeCheckSub: "Pay now and get your code directly on screen without waiting",
                codeCheckDetailsTitle: "Requested Code Details",
                codePayMethodTitle: "Choose Instant Payment Method:",
                subVisa: "Credit Card / Secure Paymob",
                subWallet: "Mobile Wallet",
                codeVisaTitle: "Enter Card Details",
                codeWalletTitle: "Enter Wallet Details",
                btnInstantPay: "Complete Payment & Get Code Instantly",
                chkSec1: "1. Customer Information",
                chkSec2: "2. Shipping Address",
                chkSec3: "3. Payment Method",
                optCityDefault: "Select City",
                chkVisaTitle: "Enter Card Details",
                chkWalletTitle: "Enter Wallet Details",
                sumTitle: "Order Summary",
                lblSubtotal: "Subtotal",
                lblShipping: "Shipping",
                lblTotal: "Total",
                ordersTitle: "My Orders List 📦",
                ordersSub: "Easily track your past orders and current shipments",
                adminTitle: "Admin Dashboard",
                adminSub: "Manage products, teacher codes, and system users completely",
                adminStat1: "Total Users",
                adminStat2: "Total Books",
                adminStat3: "Available Codes",
                admTab1: "Users",
                admTab2: "Books",
                admTab3: "Codes",
                admUsersTitle: "Platform Users & Roles List",
                thUser1: "Username",
                thUser2: "Email",
                thUser3: "Current Role",
                thUser4: "Toggle Role",
                admBookAddTitle: "Add New Book or Booklet",
                lblBookImg: "Select book cover image from device:",
                btnAddBookSubmit: "Add Book to Store",
                admBooksListTitle: "Current Books & Management",
                thBook1: "Image",
                thBook2: "Book Title",
                thBook3: "Subject",
                thBook4: "Price",
                thBook5: "Actions",
                admCodeAddTitle: "Add New Teacher Code",
                lblCodeImg: "Select cover image for code:",
                btnAddCodeSubmit: "Add Code to Store",
                admCodesListTitle: "Current Teacher Codes & Management",
                thCode1: "Image",
                thCode2: "Code Title",
                thCode3: "Subject",
                thCode4: "Price",
                thCode5: "Actions",
                admNotifHeading: "Publish New Student Notification",
                admNotifSubmitBtn: "Publish Notification Now",
                cartDrawerTitle: "Shopping Cart",
                cartEmptyText: "Cart is currently empty",
                cartTotalLbl: "Total:",
                cartCheckoutBtn: "Proceed to Checkout",
                contactTitle: "Contact Us",
                contactSub: "We are always here to answer your inquiries and serve you best",
                cEmailLbl: "Email Address",
                cPhoneLbl: "Customer Service / WhatsApp",
                cAddrLbl: "Headquarters Address",
                cAddrVal: "Cairo, Egypt",
                contactLblName: "Full Name",
                contactInName: "Enter your name",
                contactLblEmail: "Email Address",
                contactInEmail: "Enter your email",
                contactLblSubj: "Subject",
                contactInSubj: "Enter message subject",
                contactLblMsg: "Message Details",
                contactInMsg: "Write your inquiry here...",
                contactSubmitBtn: "Send Message",
                footerDesc: "The premier store providing external books, teacher notes, and high school platform codes in Egypt instantly with top quality.",
                fCol1Title: "Quick Links",
                fLink1: "Home",
                fLink2: "Books & Summaries",
                fLink3: "Teacher Codes",
                fCol2Title: "Support & Help",
                fLink4: "My Orders & Shipments",
                fLink5: "Shipping Policy",
                fLink6: "My Account",
                fLink7: "Contact Us",
                fCol3Title: "Contact Us",
                fAddr: "Cairo, Egypt - Shipping to all governorates",
                fCopy: "All rights reserved © 2026 KAAF STORE",
                fSub: "Designed specially for Egyptian High School Students ⚡",
                popTitle: "Code Purchased Successfully!",
                popDesc: "Here is your activation code, you can copy and use it instantly inside the platform:",
                popCopyBtn: "Copy Code",
                popOkBtn: "Got it",
                logoutModalTitle: "Sign Out",
                logoutModalMessage: "Are you sure you want to sign out?",
                logoutYesBtn: "Yes, Sign Out",
                logoutCancelBtn: "Cancel",
                trackModalHeader: "Track Shipment",
                lblTrackAddr: "Shipping Address:",
                lblTrackPay: "Payment Method:",
                tStep1Title: "Order & Payment Confirmed",
                tStep1Desc: "Your order has been received and is under review",
                tStep2Title: "Preparing Shipment",
                tStep2Desc: "Your order is being packaged for dispatch",
                tStep3Title: "Handed to Courier",
                tStep3Desc: "The shipment is on its way to you now",
                tStep4Title: "Delivered",
                tStep4Desc: "Order delivered successfully to your address",
                trackCloseBtn: "Close",
                loginTabBtn: "Login",
                signupTabBtn: "Create New Account",
                btnLoginSubmit: "Login to Platform",
                btnSignupSubmit: "Create Account Now",
                notifBoxTitle: "Notifications & Alerts",
                notifClearBtn: "Clear All",
                notifWelcomeText: "Welcome to Kaaf Store! Browse the best educational books and codes."
            }
        };

        const teachersBySubject = {
            arabic: [
                { id: 'mohamed_salah', name: 'محمد صلاح', subtitle: 'خبير مادة اللغة العربية' },
                { id: 'mohamed_tareq', name: 'محمد طارق', subtitle: 'خبير مادة اللغة العربية' }
            ],
            chemistry: [
                { id: 'joseph_adel', name: 'جوزيف عادل', subtitle: 'خبير مادة الكيمياء' },
                { id: 'abdallah_elhabshy', name: 'عبدالله الحبشي', subtitle: 'خبير مادة الكيمياء' }
            ],
            english: [
                { id: 'mahmoud_radwan', name: 'محمود رضوان', subtitle: 'خبير اللغة الإنجليزية' },
                { id: 'mai_tahoon', name: 'مي طاحون', subtitle: 'خبير اللغة الإنجليزية' },
                { id: 'raymon_safwat', name: 'ريمون صفوت', subtitle: 'خبير اللغة الإنجليزية' },
                { id: 'ibrahim_elshaer', name: 'ابراهيم الشاعر', subtitle: 'خبير اللغة الإنجليزية' },
                { id: 'nour_islam', name: 'نور اسلام', subtitle: 'خبير اللغة الإنجليزية' }
            ],
            history: [
                { id: 'sayed_eliraqy', name: 'سيد العراقي', subtitle: 'خبير مادة التاريخ' },
                { id: 'ahmed_elbasha', name: 'احمد الباشا', subtitle: 'خبير مادة التاريخ' }
            ],
            math: [
                { id: 'osama_saadallah', name: 'اسامه سعد الله', subtitle: 'خبير الرياضيات (ماث)' },
                { id: 'mohamed_kilany', name: 'محمد كيلاني', subtitle: 'خبير الرياضيات (ماث)' },
                { id: 'ali_fathy', name: 'علي فتحي', subtitle: 'خبير الرياضيات (ماث)' }
            ],
            physics: [
                { id: 'ashraf_hossam', name: 'اشرف حسام', subtitle: 'خبير مادة الفيزياء' },
                { id: 'alaa_foda', name: 'علاء فوده', subtitle: 'خبير مادة الفيزياء' },
                { id: 'islam_salama', name: 'اسلام سلامه', subtitle: 'خبير مادة الفيزياء' },
                { id: 'mohamed_eady', name: 'محمد عادل', subtitle: 'خبير مادة الفيزياء' },
                { id: 'tamy_elkady', name: 'تامر القاضي', subtitle: 'خبير مادة الفيزياء' },
                { id: 'محمود_مجدي', name: 'محمود مجدي', subtitle: 'خبير مادة الفيزياء' }
            ],
            programming: [
                { id: 'kamal_elmarakby', name: 'كمال المراكبي', subtitle: 'خبير مادة البرمجة' }
            ],
            biology: [
                { id: 'joseph_anwar', name: 'جوزيف انور', subtitle: 'خبير مادة الأحياء (بايو)' },
                { id: 'mena_hanna', name: 'مينا حنا', subtitle: 'خبير مادة الأحياء (بايو)' }
            ]
        };

        let booksData = [
            { id: 1, teacherId: 'mohamed_salah', title: 'ملزمة النحو الشاملة للثانوية العامة', price: 150, category: 'arabic', img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80' },
            { id: 2, teacherId: 'joseph_adel', title: 'كتاب الباب الأول والثاني كيمياء', price: 180, category: 'chemistry', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80' },
            { id: 3, teacherId: 'mahmoud_radwan', title: 'مذكرة القواعد والـ Vocabulary', price: 130, category: 'english', img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&q=80' },
            { id: 4, teacherId: 'ashraf_hossam', title: 'المرجع الأساسي في الفيزياء الحديثة', price: 200, category: 'physics', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80' }
        ];

        let codesData = [
            { id: 101, teacherId: 'mohamed_salah', title: 'كود محاضرة البلاغة والقصة', price: 80, category: 'arabic', tag: 'تفعيل فورى', img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80' },
            { id: 102, teacherId: 'joseph_adel', title: 'كود حصص الكيمياء العضوية الشهرية', price: 200, category: 'chemistry', tag: 'اشتراك شهرى', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80' },
            { id: 103, teacherId: 'ashraf_hossam', title: 'كود مراجعة الكهربية والدوائر', price: 90, category: 'physics', tag: 'كود حصري', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80' }
        ];

        let usersData = [
            { id: 1, name: 'محمود الأضخم (مدير المتجر)', email: 'admin@kaaf.com', role: 'admin' },
            { id: 2, name: 'أحمد محمد (طالب)', email: 'ahmed@student.com', role: 'user' },
            { id: 3, name: 'سارة خالد (طالبة)', email: 'sara@student.com', role: 'user' },
            { id: 4, name: 'إبراهيم علي (مشرف مبيعات)', email: 'ibrahim@kaaf.com', role: 'admin' }
        ];

        let myOrders = [];
        let cart = [];
        let currentShippingCost = 35;
        let selectedMainPaymentMethod = 'فيزا / بطاقة ائتمان عبر Paymob';
        let currentUser = null;
        let activeBookSubject = 'arabic';
        let activeCodeSubject = 'arabic';
        let tempBookImageUrl = '';
        let tempCodeImageUrl = '';

        function showToast(message) {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
            container.appendChild(toast);
            setTimeout(() => {
                toast.classList.add('hide');
                setTimeout(() => toast.remove(), 300);
            }, 2500);
        }

        function toggleMobileMenu() {
            const overlay = document.getElementById('mobileMenuOverlay');
            overlay.classList.toggle('active');
        }

        function switchPage(pageId) {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
            
            document.querySelectorAll('.nav-desktop a, .mobile-menu-links a').forEach(a => a.classList.remove('active'));
            const navLink = document.getElementById('nav-' + pageId);
            if(navLink) navLink.classList.add('active');
            const mobNavLink = document.getElementById('mob-nav-' + pageId.replace('Page',''));
            if(mobNavLink) mobNavLink.classList.add('active');
            
            if(pageId === 'booksPage') renderBookTeachers(activeBookSubject);
            if(pageId === 'teacherCodesPage') renderCodeTeachers(activeCodeSubject);
            if(pageId === 'shippingPage') renderCheckoutSummary();
            if(pageId === 'myOrdersPage') renderMyOrders();
            if(pageId === 'adminPage') renderAdminData();

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function previewBookImage(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    tempBookImageUrl = e.target.result;
                    document.getElementById('bookImgPreviewTag').src = tempBookImageUrl;
                    document.getElementById('bookImagePreviewContainer').style.display = 'block';
                }
                reader.readAsDataURL(file);
            }
        }

        function previewCodeImage(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    tempCodeImageUrl = e.target.result;
                    document.getElementById('codeImgPreviewTag').src = tempCodeImageUrl;
                    document.getElementById('codeImagePreviewContainer').style.display = 'block';
                }
                reader.readAsDataURL(file);
            }
        }

        function selectBookSubject(subject, btn) {
            activeBookSubject = subject;
            btn.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderBookTeachers(subject);
        }

        function renderBookTeachers(subject) {
            const container = document.getElementById('bookTeachersContainer');
            const teachers = teachersBySubject[subject] || [];
            container.innerHTML = teachers.map(t => `
                <div class="teacher-select-card" onclick="openTeacherBooks('${t.id}', '${t.name}')">
                    <div class="teacher-avatar"><i class="fas fa-chalkboard-teacher"></i></div>
                    <h3 style="font-size: 0.95rem; font-weight: 800; margin-bottom: 3px;">${t.name}</h3>
                    <p style="font-size: 0.72rem; color: var(--text-muted);">${t.subtitle}</p>
                    <button class="btn-submit-shipping" style="margin-top: 0.8rem; padding: 0.4rem 0.8rem; font-size: 0.75rem;">${currentLang === 'ar' ? 'عرض الكتب والملازم' : 'View Books'}</button>
                </div>
            `).join('');
        }

        function openTeacherBooks(teacherId, teacherName) {
            document.getElementById('bookSubjectsSection').style.display = 'none';
            document.getElementById('bookProductsSection').style.display = 'block';
            document.getElementById('selectedBookTeacherTitle').innerText = (currentLang === 'ar' ? `كتب وملازم: ${teacherName}` : `Books & Notes: ${teacherName}`);

            const grid = document.getElementById('teacherBooksGrid');
            const filteredBooks = booksData.filter(b => b.teacherId === teacherId);

            if(filteredBooks.length === 0) {
                grid.innerHTML = `<p style="color:var(--text-muted); grid-column: 1/-1; text-align:center; font-size: 0.85rem;">${currentLang === 'ar' ? 'لا توجد كتب مضافة لهذا المدرس حتى الآن.' : 'No books available for this teacher.'}</p>`;
                return;
            }

            grid.innerHTML = filteredBooks.map(book => `
                <div class="book-card">
                    <div class="book-image-wrapper">
                        <img src="${book.img}" alt="${book.title}">
                    </div>
                    <div>
                        <h3 class="book-title">${book.title}</h3>
                    </div>
                    <div class="book-footer">
                        <span class="book-price">${book.price} ${currentLang === 'ar' ? 'ج.م' : 'EGP'}</span>
                        <button onclick="addToCart(${book.id})" class="btn-add-cart" style="font-size: 0.78rem; padding: 0.4rem 0.8rem;">
                            <i class="fas fa-cart-plus"></i> ${currentLang === 'ar' ? 'إضافة' : 'Add'}
                        </button>
                    </div>
                </div>
            `).join('');
        }

        function backToBookSubjects() {
            document.getElementById('bookProductsSection').style.display = 'none';
            document.getElementById('bookSubjectsSection').style.display = 'block';
        }

        function selectCodeSubject(subject, btn) {
            activeCodeSubject = subject;
            btn.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCodeTeachers(subject);
        }

        function renderCodeTeachers(subject) {
            const container = document.getElementById('codeTeachersContainer');
            const teachers = teachersBySubject[subject] || [];
            container.innerHTML = teachers.map(t => `
                <div class="teacher-select-card" onclick="openTeacherCodes('${t.id}', '${t.name}')">
                    <div class="teacher-avatar"><i class="fas fa-key"></i></div>
                    <h3 style="font-size: 0.95rem; font-weight: 800; margin-bottom: 3px;">${t.name}</h3>
                    <p style="font-size: 0.72rem; color: var(--text-muted);">${t.subtitle}</p>
                    <button class="btn-submit-shipping" style="margin-top: 0.8rem; padding: 0.4rem 0.8rem; font-size: 0.75rem;">${currentLang === 'ar' ? 'عرض أكواد المحاضرات' : 'View Codes'}</button>
                </div>
            `).join('');
        }

        function openTeacherCodes(teacherId, teacherName) {
            document.getElementById('codeSubjectsSection').style.display = 'none';
            document.getElementById('codeProductsSection').style.display = 'block';
            document.getElementById('selectedCodeTeacherTitle').innerText = (currentLang === 'ar' ? `أكواد منصة: ${teacherName}` : `Platform Codes: ${teacherName}`);

            const grid = document.getElementById('teacherCodesGrid');
            const filteredCodes = codesData.filter(c => c.teacherId === teacherId);

            if(filteredCodes.length === 0) {
                grid.innerHTML = `<p style="color:var(--text-muted); grid-column: 1/-1; text-align:center; font-size: 0.85rem;">${currentLang === 'ar' ? 'لا توجد أكواد مضافة لهذا المدرس حتى الآن.' : 'No codes available for this teacher.'}</p>`;
                return;
            }

            grid.innerHTML = filteredCodes.map(code => `
                <div class="code-card">
                    <div>
                        <span class="code-tag">${code.tag}</span>
                        <h3 style="font-size: 0.95rem; font-weight: 800; margin: 0.2rem 0 0.6rem;">${code.title}</h3>
                    </div>
                    <div class="book-footer">
                        <span class="book-price">${code.price} ${currentLang === 'ar' ? 'ج.م' : 'EGP'}</span>
                        <button onclick="openInstantCodeCheckout(${code.id})" class="btn-submit-shipping" style="font-size: 0.78rem; padding: 0.4rem 0.8rem;">
                            <i class="fas fa-bolt"></i> ${currentLang === 'ar' ? 'شراء فورى' : 'Buy'}
                        </button>
                    </div>
                </div>
            `).join('');
        }

        function backToCodeSubjects() {
            document.getElementById('codeProductsSection').style.display = 'none';
            document.getElementById('codeSubjectsSection').style.display = 'block';
        }

        function toggleNotifDropdown(event) {
            if (event) event.stopPropagation();
            const menu = document.getElementById('notifDropdownMenu');
            menu.classList.toggle('active');
        }

        window.addEventListener('click', () => {
            const menu = document.getElementById('notifDropdownMenu');
            if (menu && menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        });

        function clearNotifications() {
            notificationsList = [];
            renderNotifications();
            showToast(currentLang === 'ar' ? 'تم مسح الإشعارات' : 'Notifications cleared');
        }

        function renderNotifications() {
            const container = document.getElementById('notifListContainer');
            const badge = document.getElementById('notifCountBadge');
            badge.innerText = notificationsList.length;

            if (notificationsList.length === 0) {
                container.innerHTML = `<p style="text-align: center; color: var(--text-muted); font-size: 0.75rem; padding: 0.6rem 0;">${currentLang === 'ar' ? 'لا توجد إشعارات حالياً' : 'No current notifications'}</p>`;
                document.getElementById('txt-announcement').innerText = currentLang === 'ar' ? "لا توجد إشعارات حالياً" : "No current notifications";
                return;
            }
            container.innerHTML = notificationsList.map(n => `
                <div class="notif-item">
                    <i class="fas fa-bell"></i>
                    <div class="notif-item-content">${n.text}</div>
                </div>
            `).join('');
            document.getElementById('txt-announcement').innerText = notificationsList[notificationsList.length - 1].text;
        }

        function handleAdminSendNotification(e) {
            e.preventDefault();
            const textInput = document.getElementById('adminNotifText');
            const newText = textInput.value.trim();
            if(newText) {
                notificationsList.push({ id: Date.now(), text: newText });
                renderNotifications();
                showToast(currentLang === 'ar' ? 'تم نشر الإشعار بنجاح!' : 'Notification published!');
                textInput.value = '';
            }
        }

        function openAuthModal() {
            if(currentUser) {
                document.getElementById('logoutModalOverlay').classList.add('active');
            } else {
                switchPage('authPage');
            }
        }

        function closeLogoutModal() {
            document.getElementById('logoutModalOverlay').classList.remove('active');
        }

        function confirmLogout() {
            currentUser = null;
            closeLogoutModal();
            showToast(currentLang === 'ar' ? 'تم تسجيل الخروج بنجاح' : 'Logged out');
            switchPage('homePage');
        }

        function switchAuthTab(tab) {
            document.getElementById('tabLoginBtn').classList.toggle('active', tab === 'login');
            document.getElementById('tabSignupBtn').classList.toggle('active', tab === 'signup');
            document.getElementById('loginFormSection').style.display = (tab === 'login') ? 'block' : 'none';
            document.getElementById('signupFormSection').style.display = (tab === 'signup') ? 'block' : 'none';
        }

        function handleLoginSubmit(e) {
            e.preventDefault();
            currentUser = { id: 2, name: 'أحمد محمد', email: document.getElementById('loginEmail').value, role: 'user' };
            showToast(currentLang === 'ar' ? 'تم تسجيل الدخول بنجاح!' : 'Logged in!');
            switchPage('homePage');
        }

        function handleSignupSubmit(e) {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const phone = document.getElementById('signupPhone').value;
            const grade = document.getElementById('signupGrade').value;
            const gov = document.getElementById('signupGov').value;
            
            currentUser = { 
                id: Date.now(), 
                name: name, 
                email: document.getElementById('signupEmail').value, 
                phone: phone,
                grade: grade,
                gov: gov,
                role: 'user' 
            };
            usersData.push(currentUser);
            showToast(currentLang === 'ar' ? 'تم إنشاء الحساب بنجاح!' : 'Account created!');
            switchPage('homePage');
        }

        function checkAuthAndProceed(targetPage) {
            if(!currentUser) {
                showToast(currentLang === 'ar' ? 'يرجى تسجيل الدخول أولاً!' : 'Please login first!');
                switchPage('authPage');
                return false;
            }
            if(cart.length === 0 && targetPage === 'shippingPage') {
                showToast(currentLang === 'ar' ? 'سلة الشراء فارغة!' : 'Cart is empty!');
                return false;
            }
            toggleCart(false);
            switchPage(targetPage);
            return true;
        }

        function toggleTheme() {
            const html = document.documentElement;
            const current = html.getAttribute('data-theme');
            html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
        }

        function toggleCart(forceState) {
            const overlay = document.getElementById('cartOverlay');
            if(typeof forceState === 'boolean') overlay.classList.toggle('active', forceState);
            else overlay.classList.toggle('active');
            renderCartItems();
        }

        function addToCart(bookId) {
            const book = booksData.find(b => b.id === bookId);
            if(!book) return;
            const existing = cart.find(i => i.id === bookId);
            if(existing) existing.qty++;
            else cart.push({ ...book, qty: 1 });
            showToast(currentLang === 'ar' ? `تمت إضافة "${book.title}" للسلة` : `Added to cart`);
            renderCartItems();
        }

        function removeFromCart(bookId) {
            cart = cart.filter(i => i.id !== bookId);
            renderCartItems();
            renderCheckoutSummary();
        }

        function updateCartQty(bookId, delta) {
            const item = cart.find(i => i.id === bookId);
            if(item) {
                item.qty += delta;
                if(item.qty <= 0) removeFromCart(bookId);
                else { renderCartItems(); renderCheckoutSummary(); }
            }
        }

        function renderCartItems() {
            const list = document.getElementById('cartItemsList');
            const countBadge = document.getElementById('cartCount');
            const totalLbl = document.getElementById('drawerTotalPrice');
            const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

            countBadge.innerText = totalQty;
            totalLbl.innerText = `${totalPrice} ${currentLang === 'ar' ? 'ج.م' : 'EGP'}`;

            if(cart.length === 0) {
                list.innerHTML = `<p style="text-align: center; color: var(--text-muted); margin-top: 1.5rem; font-size: 0.8rem;">${currentLang === 'ar' ? 'السلة فارغة حالياً' : 'Cart is empty'}</p>`;
                return;
            }

            list.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div style="overflow: hidden;">
                        <div style="font-weight:700; font-size:0.8rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.title}</div>
                        <div style="font-size:0.7rem; color:var(--accent); font-weight:800;">${item.price} ${currentLang === 'ar' ? 'ج.م' : 'EGP'}</div>
                    </div>
                    <div style="display:flex; align-items:center; gap:4px; flex-shrink:0;">
                        <button onclick="updateCartQty(${item.id}, -1)" class="btn-action-sm">-</button>
                        <span style="font-weight:700; font-size:0.8rem;">${item.qty}</span>
                        <button onclick="updateCartQty(${item.id}, 1)" class="btn-action-sm">+</button>
                        <button onclick="removeFromCart(${item.id})" class="btn-action-sm btn-danger-sm"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `).join('');
        }

        let selectedCodeForCheckout = null;
        function openInstantCodeCheckout(codeId) {
            if(!currentUser) {
                showToast(currentLang === 'ar' ? 'يرجى تسجيل الدخول أولاً!' : 'Please login first!');
                switchPage('authPage');
                return;
            }
            selectedCodeForCheckout = codesData.find(c => c.id === codeId);
            if(!selectedCodeForCheckout) return;

            document.getElementById('checkoutCodeDetails').innerHTML = `
                <div style="font-weight: 800; font-size: 0.9rem; margin-bottom: 3px;">${selectedCodeForCheckout.title}</div>
                <div style="font-size: 0.72rem; color: var(--text-muted);">${currentLang === 'ar' ? 'التصنيف' : 'Category'}: ${selectedCodeForCheckout.tag}</div>
                <div style="font-size: 1rem; font-weight: 900; color: var(--accent); margin-top: 5px;">${currentLang === 'ar' ? 'السعر' : 'Price'}: ${selectedCodeForCheckout.price} ${currentLang === 'ar' ? 'ج.م' : 'EGP'}</div>
            `;
            switchPage('codeCheckoutPage');
        }

        function selectCodePaymentMethod(type, el) {
            document.querySelectorAll('#codeCheckoutPage .payment-radio-card').forEach(o => o.classList.remove('active'));
            el.classList.add('active');
            document.getElementById('codeVisaFieldsSection').style.display = (type === 'visa') ? 'block' : 'none';
            document.getElementById('codeWalletFieldsSection').style.display = (type === 'wallet') ? 'block' : 'none';
        }

        function confirmInstantCodePurchase() {
            const randomCode = "KAAF-" + Math.floor(100000 + Math.random() * 900000);
            document.getElementById('popupCodeText').innerText = randomCode;
            document.getElementById('codePopupOverlay').classList.add('active');
        }

        function closeCodePopup() {
            document.getElementById('codePopupOverlay').classList.remove('active');
            switchPage('homePage');
        }

        function copyGeneratedCode() {
            navigator.clipboard.writeText(document.getElementById('popupCodeText').innerText);
            showToast(currentLang === 'ar' ? 'تم نسخ كود التفعيل بنجاح!' : 'Code copied!');
        }

        function selectPaymentMethod(type, el) {
            selectedMainPaymentMethod = (type === 'visa') ? (currentLang === 'ar' ? 'فيزا / بطاقة الائتمان عبر Paymob' : 'Visa / Credit Card via Paymob') : (currentLang === 'ar' ? 'محفظة إلكترونية' : 'Mobile Wallet');
            document.querySelectorAll('#shippingPage .payment-radio-card').forEach(o => o.classList.remove('active'));
            el.classList.add('active');
            document.getElementById('visaFieldsSection').style.display = (type === 'visa') ? 'block' : 'none';
            document.getElementById('walletFieldsSection').style.display = (type === 'wallet') ? 'block' : 'none';
        }

        function calculateShippingCost() {
            const gov = document.getElementById('shipGov').value;
            if(gov === 'Cairo') currentShippingCost = 35;
            else if(gov === 'Alexandria') currentShippingCost = 45;
            else if(gov === 'Delta') currentShippingCost = 50;
            else if(gov === 'Upper') currentShippingCost = 65;
            renderCheckoutSummary();
        }

        function renderCheckoutSummary() {
            const container = document.getElementById('checkoutSummaryItems');
            const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
            const grandTotal = subtotal + (cart.length > 0 ? currentShippingCost : 0);

            container.innerHTML = cart.map(item => `
                <div class="order-summary-item">
                    <img src="${item.img}" class="summary-img" alt="${item.title}">
                    <div class="summary-item-details">
                        <div class="summary-item-title">${item.title}</div>
                        <div class="summary-item-qty">${currentLang === 'ar' ? 'الكمية' : 'Qty'}: ${item.qty}</div>
                    </div>
                    <div class="summary-item-price">${item.price * item.qty} EGP</div>
                </div>
            `).join('');

            document.getElementById('summarySubtotalPrice').innerText = `${subtotal} EGP`;
            document.getElementById('summaryShippingPrice').innerText = `${currentShippingCost} EGP`;
            document.getElementById('summaryTotalPrice').innerText = `${grandTotal} EGP`;
            document.getElementById('btnPayText').innerText = `Pay ${grandTotal} EGP`;
        }

        function handleDirectCheckout(e) {
            e.preventDefault();
            const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
            myOrders.unshift({
                id: "ORD-" + Math.floor(10000 + Math.random() * 90000),
                date: new Date().toISOString().split('T')[0],
                address: document.getElementById('shipAddress').value,
                paymentMethod: selectedMainPaymentMethod,
                status: "processing",
                statusText: currentLang === 'ar' ? "جاري التجهيز" : "Processing",
                total: `${subtotal + currentShippingCost} EGP`,
                items: [...cart]
            });
            cart = [];
            renderCartItems();
            showToast(currentLang === 'ar' ? 'تم تقديم الطلب بنجاح!' : 'Order submitted successfully!');
            switchPage('myOrdersPage');
        }

        function renderMyOrders() {
            const container = document.getElementById('ordersListContainer');
            if(myOrders.length === 0) {
                container.innerHTML = `<p style="text-align:center; color: var(--text-muted); padding: 2rem 0; font-size: 0.85rem;">${currentLang === 'ar' ? 'ليس لديك أي طلبات سابقة حتى الآن.' : 'No previous orders yet.'}</p>`;
                return;
            }
            container.innerHTML = myOrders.map(o => `
                <div class="order-card">
                    <div class="order-header">
                        <span>${currentLang === 'ar' ? 'رقم الطلب' : 'ID'}: ${o.id} (${o.date})</span>
                        <span class="order-status-badge ${o.status}">${o.statusText}</span>
                    </div>
                    <div class="order-items-mini">
                        ${o.items.map(item => `
                            <div class="order-item-mini">
                                <span>${item.title} (x${item.qty})</span>
                                <span style="font-weight:700;">${item.price * item.qty} EGP</span>
                            </div>
                        `).join('')}
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--glass-border); padding-top:0.6rem; margin-top:0.6rem; gap:6px;">
                        <span style="font-weight:900; color:var(--accent); font-size:0.85rem;">${currentLang === 'ar' ? 'الإجمالي' : 'Total'}: ${o.total}</span>
                        <button onclick="openTrackingModal('${o.id}')" class="btn-track-order">
                            <i class="fas fa-truck"></i> ${currentLang === 'ar' ? 'تتبع' : 'Track'}
                        </button>
                    </div>
                </div>
            `).join('');
        }

        function openTrackingModal(orderId) {
            const order = myOrders.find(o => o.id === orderId);
            if(!order) return;
            document.getElementById('trackModalOrderId').innerText = order.id;
            document.getElementById('trackModalAddress').innerText = order.address;
            document.getElementById('trackModalPayment').innerText = order.paymentMethod;
            document.getElementById('trackingModal').classList.add('active');
        }

        function closeTrackingModal() {
            document.getElementById('trackingModal').classList.remove('active');
        }

        function renderAdminData() {
            document.getElementById('statTotalUsers').innerText = usersData.length;
            document.getElementById('statTotalBooks').innerText = booksData.length;
            document.getElementById('statTotalCodes').innerText = codesData.length;

            document.getElementById('usersTableBody').innerHTML = usersData.map(u => `
                <tr><td>${u.name}</td><td>${u.email}</td><td><span class="badge-role ${u.role}">${u.role}</span></td><td><button onclick="toggleUserRole(${u.id})" class="btn-action-sm">${currentLang === 'ar' ? 'تغيير' : 'Toggle'}</button></td></tr>
            `).join('');

            document.getElementById('adminBooksTableBody').innerHTML = booksData.map(b => `
                <tr><td><img src="${b.img}" style="width:32px; height:32px; border-radius:5px; object-fit:cover;"></td><td style="font-weight:700;">${b.title}</td><td>${b.category}</td><td style="color:var(--accent); font-weight:800;">${b.price}</td><td><button onclick="deleteBook(${b.id})" class="btn-action-sm btn-danger-sm"><i class="fas fa-trash"></i></button></td></tr>
            `).join('');

            document.getElementById('adminCodesTableBody').innerHTML = codesData.map(c => `
                <tr><td><img src="${c.img}" style="width:32px; height:32px; border-radius:5px; object-fit:cover;"></td><td style="font-weight:700;">${c.title}</td><td>${c.category}</td><td style="color:var(--accent); font-weight:800;">${c.price}</td><td><button onclick="deleteCode(${c.id})" class="btn-action-sm btn-danger-sm"><i class="fas fa-trash"></i></button></td></tr>
            `).join('');
        }

        function switchAdminTab(tabId, btn) {
            btn.parentElement.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.admin-panel-content').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        }

        function toggleUserRole(userId) {
            const user = usersData.find(u => u.id === userId);
            if(user) {
                user.role = user.role === 'admin' ? 'user' : 'admin';
                showToast(currentLang === 'ar' ? `تم تغيير صلاحية ${user.name}` : `Role changed`);
                renderAdminData();
            }
        }

        function handleAddBook(e) {
            e.preventDefault();
            const title = document.getElementById('newBookTitle').value;
            const price = parseFloat(document.getElementById('newBookPrice').value);
            const category = document.getElementById('newBookCategory').value;
            const teacherId = document.getElementById('newBookTeacher').value;

            booksData.push({ 
                id: Date.now(), teacherId, title, price, category, 
                img: tempBookImageUrl || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80' 
            });

            showToast(currentLang === 'ar' ? 'تمت إضافة الكتاب بنجاح!' : 'Book added successfully!');
            renderAdminData();
            e.target.reset();
            document.getElementById('bookImagePreviewContainer').style.display = 'none';
            tempBookImageUrl = '';
        }

        function deleteBook(id) {
            booksData = booksData.filter(b => b.id !== id);
            showToast(currentLang === 'ar' ? 'تم حذف الكتاب' : 'Book deleted');
            renderAdminData();
        }

        function handleAddCode(e) {
            e.preventDefault();
            const title = document.getElementById('newCodeTitle').value;
            const price = parseFloat(document.getElementById('newCodePrice').value);
            const category = document.getElementById('newCodeCategory').value;
            const teacherId = document.getElementById('newCodeTeacher').value;

            codesData.push({ 
                id: Date.now(), teacherId, title, price, category, 
                tag: currentLang === 'ar' ? 'كود حصري' : 'Exclusive Code',
                img: tempCodeImageUrl || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80'
            });

            showToast(currentLang === 'ar' ? 'تمت إضافة الكود بنجاح!' : 'Code added successfully!');
            renderAdminData();
            e.target.reset();
            document.getElementById('codeImagePreviewContainer').style.display = 'none';
            tempCodeImageUrl = '';
        }

        function deleteCode(id) {
            codesData = codesData.filter(c => c.id !== id);
            showToast(currentLang === 'ar' ? 'تم حذف الكود' : 'Code deleted');
            renderAdminData();
        }

        function toggleLanguage() {
            currentLang = (currentLang === 'ar') ? 'en' : 'ar';
            const html = document.documentElement;
            html.setAttribute('lang', currentLang);
            html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
            document.getElementById('langBtn').innerText = (currentLang === 'ar') ? 'EN' : 'AR';
            applyTranslations();
            renderNotifications();
            showToast(currentLang === 'ar' ? 'تم التبديل إلى العربية' : 'Switched to English');
        }

        function applyTranslations() {
            const t = translations[currentLang];
            document.getElementById('nav-homePage').innerText = t.navHome;
            document.getElementById('nav-booksPage').innerText = t.navBooks;
            document.getElementById('nav-teacherCodesPage').innerText = t.navCodes;
            document.getElementById('nav-shippingPage').innerText = t.navCheckout;
            document.getElementById('nav-myOrdersPage').innerText = t.navOrders;
            document.getElementById('nav-adminPage').innerText = t.navAdmin;

            document.getElementById('mob-nav-home').innerHTML = `<i class="fas fa-home"></i> ${t.navHome}`;
            document.getElementById('mob-nav-books').innerHTML = `<i class="fas fa-book"></i> ${t.navBooks}`;
            document.getElementById('mob-nav-codes').innerHTML = `<i class="fas fa-key"></i> ${t.navCodes}`;
            document.getElementById('mob-nav-shipping').innerHTML = `<i class="fas fa-credit-card"></i> ${t.navCheckout}`;
            document.getElementById('mob-nav-orders').innerHTML = `<i class="fas fa-box"></i> ${t.navOrders}`;
            document.getElementById('mob-nav-admin').innerHTML = `<i class="fas fa-cog"></i> ${t.navAdmin}`;

            document.getElementById('badge-text').innerText = t.badgeText;
            document.getElementById('home-title').innerHTML = `${t.homeTitleFirst} <span class="highlight-word" id="highlighted-word">${t.homeTitleHighlight}</span> ${t.homeTitleLast}`;
            document.getElementById('home-subtitle').innerText = t.homeSubtitle;
            document.getElementById('txt-browse-btn').innerText = t.browseBtn;
            document.getElementById('txt-codes-btn').innerText = t.codesBtn;
            document.getElementById('float-title').innerText = t.floatTitle;
            document.getElementById('float-subtitle').innerText = t.floatSubtitle;

            document.getElementById('statLbl1').innerText = t.statLbl1;
            document.getElementById('statLbl2').innerText = t.statLbl2;
            document.getElementById('statLbl3').innerText = t.statLbl3;

            document.getElementById('feat1Title').innerText = t.feat1Title;
            document.getElementById('feat1Desc').innerText = t.feat1Desc;
            document.getElementById('feat2Title').innerText = t.feat2Title;
            document.getElementById('feat2Desc').innerText = t.feat2Desc;
            document.getElementById('feat3Title').innerText = t.feat3Title;
            document.getElementById('feat3Desc').innerText = t.feat3Desc;

            document.getElementById('books-title').innerText = t.booksTitle;
            document.getElementById('books-sub').innerText = t.booksSub;
            document.getElementById('catAr').innerText = t.catAr;
            document.getElementById('catChem').innerText = t.catChem;
            document.getElementById('catEng').innerText = t.catEng;
            document.getElementById('catHist').innerText = t.catHist;
            document.getElementById('catMath').innerText = t.catMath;
            document.getElementById('catPhys').innerText = t.catPhys;
            document.getElementById('catProg').innerText = t.catProg;
            document.getElementById('catBio').innerText = t.catBio;
            document.getElementById('backBooksBtn').innerHTML = `<i class="fas fa-arrow-${currentLang === 'ar' ? 'right' : 'left'}"></i> ${t.backBooksBtn}`;

            document.getElementById('codes-title').innerText = t.codesTitle;
            document.getElementById('codes-sub').innerText = t.codesSub;
            document.getElementById('codeCatAr').innerText = t.codeCatAr;
            document.getElementById('codeCatChem').innerText = t.codeCatChem;
            document.getElementById('codeCatEng').innerText = t.codeCatEng;
            document.getElementById('codeCatHist').innerText = t.codeCatHist;
            document.getElementById('codeCatMath').innerText = t.codeCatMath;
            document.getElementById('codeCatPhys').innerText = t.codeCatPhys;
            document.getElementById('codeCatProg').innerText = t.codeCatProg;
            document.getElementById('codeCatBio').innerText = t.codeCatBio;
            document.getElementById('backCodesBtn').innerHTML = `<i class="fas fa-arrow-${currentLang === 'ar' ? 'right' : 'left'}"></i> ${t.backCodesBtn}`;

            document.getElementById('codeCheckTitle').innerText = t.codeCheckTitle;
            document.getElementById('codeCheckSub').innerText = t.codeCheckSub;
            document.getElementById('codeCheckDetailsTitle').innerHTML = `<i class="fas fa-ticket-alt"></i> ${t.codeCheckDetailsTitle}`;
            document.getElementById('codePayMethodTitle').innerText = t.codePayMethodTitle;
            document.getElementById('subVisa').innerText = t.subVisa;
            document.getElementById('subWallet').innerText = t.subWallet;
            document.getElementById('codeVisaTitle').innerHTML = `<i class="fas fa-credit-card"></i> ${t.codeVisaTitle}`;
            document.getElementById('codeWalletTitle').innerHTML = `<i class="fas fa-mobile-alt"></i> ${t.codeWalletTitle}`;
            document.getElementById('btnInstantPay').innerHTML = `<i class="fas fa-bolt"></i> ${t.btnInstantPay}`;

            document.getElementById('chkSec1').innerText = t.chkSec1;
            document.getElementById('chkSec2').innerText = t.chkSec2;
            document.getElementById('chkSec3').innerText = t.chkSec3;
            document.getElementById('optCityDefault').innerText = t.optCityDefault;
            document.getElementById('chkVisaTitle').innerHTML = `<i class="fas fa-credit-card"></i> ${t.chkVisaTitle}`;
            document.getElementById('chkWalletTitle').innerHTML = `<i class="fas fa-mobile-alt"></i> ${t.chkWalletTitle}`;
            document.getElementById('sumTitle').innerText = t.sumTitle;
            document.getElementById('lblSubtotal').innerText = t.lblSubtotal;
            document.getElementById('lblShipping').innerText = t.lblShipping;
            document.getElementById('lblTotal').innerText = t.lblTotal;

            document.getElementById('ordersTitle').innerText = t.ordersTitle;
            document.getElementById('ordersSub').innerText = t.ordersSub;

            document.getElementById('adminTitle').innerText = t.adminTitle;
            document.getElementById('adminSub').innerText = t.adminSub;
            document.getElementById('adminStat1').innerText = t.adminStat1;
            document.getElementById('adminStat2').innerText = t.adminStat2;
            document.getElementById('adminStat3').innerText = t.adminStat3;

            document.getElementById('admTab1').innerHTML = `<i class="fas fa-users-cog"></i> ${t.admTab1}`;
            document.getElementById('admTab2').innerHTML = `<i class="fas fa-book-medical"></i> ${t.admTab2}`;
            document.getElementById('admTab3').innerHTML = `<i class="fas fa-key"></i> ${t.admTab3}`;
            document.getElementById('admTab4').innerHTML = `<i class="fas fa-bell"></i> ${currentLang === 'ar' ? 'الإشعارات 🔔' : 'Notifs 🔔'}`;
            document.getElementById('admUsersTitle').innerHTML = `<i class="fas fa-shield-alt" style="color: var(--accent);"></i> ${t.admUsersTitle}`;

            document.getElementById('thUser1').innerText = t.thUser1;
            document.getElementById('thUser2').innerText = t.thUser2;
            document.getElementById('thUser3').innerText = t.thUser3;
            document.getElementById('thUser4').innerText = t.thUser4;

            document.getElementById('admBookAddTitle').innerHTML = `<i class="fas fa-plus-circle" style="color: var(--accent);"></i> ${t.admBookAddTitle}`;
            document.getElementById('lblBookImg').innerHTML = `<i class="fas fa-image"></i> ${t.lblBookImg}`;
            document.getElementById('btnAddBookSubmit').innerHTML = `<i class="fas fa-plus"></i> ${t.btnAddBookSubmit}`;
            document.getElementById('admBooksListTitle').innerHTML = `<i class="fas fa-list" style="color: var(--accent);"></i> ${t.admBooksListTitle}`;

            document.getElementById('thBook1').innerText = t.thBook1;
            document.getElementById('thBook2').innerText = t.thBook2;
            document.getElementById('thBook3').innerText = t.thBook3;
            document.getElementById('thBook4').innerText = t.thBook4;
            document.getElementById('thBook5').innerText = t.thBook5;

            document.getElementById('admCodeAddTitle').innerHTML = `<i class="fas fa-bolt" style="color: var(--accent);"></i> ${t.admCodeAddTitle}`;
            document.getElementById('lblCodeImg').innerHTML = `<i class="fas fa-image"></i> ${t.lblCodeImg}`;
            document.getElementById('btnAddCodeSubmit').innerHTML = `<i class="fas fa-plus"></i> ${t.btnAddCodeSubmit}`;
            document.getElementById('admCodesListTitle').innerHTML = `<i class="fas fa-list" style="color: var(--accent);"></i> ${t.admCodesListTitle}`;

            document.getElementById('thCode1').innerText = t.thCode1;
            document.getElementById('thCode2').innerText = t.thCode2;
            document.getElementById('thCode3').innerText = t.thCode3;
            document.getElementById('thCode4').innerText = t.thCode4;
            document.getElementById('thCode5').innerText = t.thCode5;

            document.getElementById('admNotifHeading').innerHTML = `<i class="fas fa-bullhorn" style="color: var(--accent);"></i> ${t.admNotifHeading}`;
            document.getElementById('admNotifSubmitBtn').innerHTML = `<i class="fas fa-paper-plane"></i> ${t.admNotifSubmitBtn}`;

            document.getElementById('contactTitle').innerText = t.contactTitle;
            document.getElementById('contactSub').innerText = t.contactSub;
            document.getElementById('cEmailLbl').innerText = t.cEmailLbl;
            document.getElementById('cPhoneLbl').innerText = t.cPhoneLbl;
            document.getElementById('cAddrLbl').innerText = t.cAddrLbl;
            document.getElementById('cAddrVal').innerText = t.cAddrVal;
            document.getElementById('contactLblName').innerText = t.contactLblName;
            document.getElementById('contactInName').placeholder = t.contactInName;
            document.getElementById('contactLblEmail').innerText = t.contactLblEmail;
            document.getElementById('contactInEmail').placeholder = t.contactInEmail;
            document.getElementById('contactLblSubj').innerText = t.contactLblSubj;
            document.getElementById('contactInSubj').placeholder = t.contactInSubj;
            document.getElementById('contactLblMsg').innerText = t.contactLblMsg;
            document.getElementById('contactInMsg').placeholder = t.contactInMsg;
            document.getElementById('contactSubmitBtn').innerText = t.contactSubmitBtn;

            document.getElementById('cartDrawerTitle').innerText = t.cartDrawerTitle;
            document.getElementById('cartEmptyText').innerText = t.cartEmptyText;
            document.getElementById('cartTotalLbl').innerText = t.cartTotalLbl;
            document.getElementById('cartCheckoutBtn').innerText = t.cartCheckoutBtn;

            document.getElementById('footerDesc').innerText = t.footerDesc;
            document.getElementById('fCol1Title').innerText = t.fCol1Title;
            document.getElementById('fLink1').innerText = t.fLink1;
            document.getElementById('fLink2').innerText = t.fLink2;
            document.getElementById('fLink3').innerText = t.fLink3;
            document.getElementById('fCol2Title').innerText = t.fCol2Title;
            document.getElementById('fLink4').innerText = t.fLink4;
            document.getElementById('fLink5').innerText = t.fLink5;
            document.getElementById('fLink6').innerText = t.fLink6;
            document.getElementById('fLink7').innerText = t.fLink7;
            document.getElementById('fCol3Title').innerText = t.fCol3Title;
            document.getElementById('fAddr').innerText = t.fAddr;
            document.getElementById('fCopy').innerText = t.fCopy;
            document.getElementById('fSub').innerText = t.fSub;

            document.getElementById('popTitle').innerText = t.popTitle;
            document.getElementById('popDesc').innerText = t.popDesc;
            document.getElementById('popCopyBtn').innerHTML = `<i class="fas fa-copy"></i> ${t.popCopyBtn}`;
            document.getElementById('popOkBtn').innerHTML = `<i class="fas fa-check"></i> ${t.popOkBtn}`;

            document.getElementById('logoutCardBox').style.textAlign = (currentLang === 'ar') ? 'right' : 'left';
            document.getElementById('logoutModalTitle').innerText = t.logoutModalTitle;
            document.getElementById('logoutModalMessage').innerText = t.logoutModalMessage;
            document.getElementById('logoutYesBtn').innerText = t.logoutYesBtn;
            document.getElementById('logoutModalMessage').innerText = t.logoutModalMessage;
            document.getElementById('logoutCancelBtn').innerText = t.logoutCancelBtn;

            document.getElementById('trackModalHeader').innerHTML = `<i class="fas fa-shipping-fast" style="color: #2563eb;"></i> ${t.trackModalHeader} - <span id="trackModalOrderId">#1001</span>`;
            document.getElementById('lblTrackAddr').innerText = t.lblTrackAddr;
            document.getElementById('lblTrackPay').innerText = t.lblTrackPay;
            document.getElementById('tStep1Title').innerText = t.tStep1Title;
            document.getElementById('tStep1Desc').innerText = t.tStep1Desc;
            document.getElementById('tStep2Title').innerText = t.tStep2Title;
            document.getElementById('tStep2Desc').innerText = t.tStep2Desc;
            document.getElementById('tStep3Title').innerText = t.tStep3Title;
            document.getElementById('tStep3Desc').innerText = t.tStep3Desc;
            document.getElementById('tStep4Title').innerText = t.tStep4Title;
            document.getElementById('tStep4Desc').innerText = t.tStep4Desc;
            document.getElementById('trackCloseBtn').innerText = t.trackCloseBtn;

            document.getElementById('tabLoginBtn').innerText = t.loginTabBtn;
            document.getElementById('tabSignupBtn').innerText = t.signupTabBtn;
            document.getElementById('btnLoginSubmit').innerHTML = `<i class="fas fa-sign-in-alt"></i> ${t.btnLoginSubmit}`;
            document.getElementById('btnSignupSubmit').innerHTML = `<i class="fas fa-user-plus"></i> ${t.btnSignupSubmit}`;

            document.getElementById('notifBoxTitle').innerText = t.notifBoxTitle;
            document.getElementById('notifClearBtn').innerText = t.notifClearBtn;
            document.getElementById('notifWelcomeText').innerText = t.notifWelcomeText;
        }

        window.addEventListener('DOMContentLoaded', () => {
            renderBookTeachers('arabic');
            renderCodeTeachers('arabic');
            renderCartItems();
            renderNotifications();
        });
    
