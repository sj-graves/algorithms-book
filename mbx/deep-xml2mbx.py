import os
import glob

mbx_list = glob.glob("*.xml")

for filename in mbx_list:
    f = open(filename,'r')
    file_contents = f.read().replace('.xml','.mbx')
    spl_fc = file_contents.split('_')
    out_contents = spl_fc[0]
    for bloc in spl_fc[1:]:
        if out_contents[-1] in '1234567890' and bloc[0] in '1234567890':
            out_contents += '-'+bloc
        else:
            out_contents += '_'+bloc
    
    f.close()
    
    f = open(filename.replace('_','-').replace('.xml','.mbx'),'w')
    f.write(out_contents)
    f.close()