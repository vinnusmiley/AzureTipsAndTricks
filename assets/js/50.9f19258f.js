(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{358:function(e,t,o){"use strict";o.r(t);var a=o(43),r=Object(a.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/common/storage-use-azcopy-v10?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("AzCopy v10"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h4",{attrs:{id:"prevent-azcopy-uploads-from-maxing-out-internet-connection-speed"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prevent-azcopy-uploads-from-maxing-out-internet-connection-speed","aria-hidden":"true"}},[e._v("#")]),e._v(" Prevent AzCopy Uploads from maxing out Internet Connection Speed")]),e._v(" "),o("p",[o("strong",[e._v("What is AzCopy?")]),e._v(" AzCopy is a command-line utility designed for copying data to/from Microsoft Azure Blob, File, and Table storage, using simple commands designed for optimal performance. You can copy data between a file system and a storage account, or between storage accounts. "),o("em",[e._v("(courtesy of docs)")])]),e._v(" "),o("p",[e._v("You can download either the latest version of AzCopy on "),o("a",{attrs:{href:"http://aka.ms/downloadazcopy?WT.mc_id=akams-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/common/storage-use-azcopy-linux?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("For this example, I'm going to use Windows. If you type AzCopy then you'll see there is a list of parameters available.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/azcopy1blog.png")}}),e._v(" "),o("p",[e._v("At first glance, you may think this is all but you can easily type "),o("code",[e._v("azcopy /?")]),e._v(" to get a complete list which will show you additional parameters - which includes the one that we'll talk about shortly.")]),e._v(" "),o("p",[e._v("If you are using "),o("strong",[e._v("AzCopy")]),e._v(" to send large amounts of data to Azure on either a residential or small business internet pipe, or if for whatever reason you want to limit the concurrent-operations that the app uses then this tip is for you.")]),e._v(" "),o("p",[e._v("Simply use the "),o("code",[e._v('/NC:"number-of-concurrent-operations"')]),e._v(" where "),o("code",[e._v("number-of-concurrent-operations")]),e._v(" specifies the number of concurrent operations. (for example: azcopy /NC:1)")]),e._v(" "),o("div",{staticClass:"language-text line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("AzCopy by default starts a certain number of concurrent operations to increase the data transfer throughput. Note that large number of concurrent operations in a low-bandwidth environment may overwhelm the network connection and prevent the operations from fully completing. Throttle concurrent operations based on actual available network bandwidth.\n\nThe upper limit for concurrent operations is 512.\n\nApplicable to: Blobs, Files, Tables\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br"),o("span",{staticClass:"line-number"},[e._v("3")]),o("br"),o("span",{staticClass:"line-number"},[e._v("4")]),o("br"),o("span",{staticClass:"line-number"},[e._v("5")]),o("br")])]),o("p",[e._v("For a complete list of parameters and additional information then visit "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/common/storage-use-azcopy?toc=%2fazure%2fstorage%2ffiles%2ftoc.json#azcopy-parameters?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("docs"),o("OutboundLink")],1)])])},[],!1,null,null,null);t.default=r.exports}}]);