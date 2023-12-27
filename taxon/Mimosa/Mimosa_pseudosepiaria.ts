// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa pseudosepiaria
const Mimosa_pseudosepiaria = new Mimosa()
Mimosa_pseudosepiaria.specificEpithet = 'pseudosepiaria'

Mimosa_pseudosepiaria.stems = new Stems()

Mimosa_pseudosepiaria.stipule = new Stipule()
Mimosa_pseudosepiaria.stipule.margin = new MarginStipule()
Mimosa_pseudosepiaria.stipule.adaxial = new AdaxialStipule()
Mimosa_pseudosepiaria.stipule.abaxial = new AbaxialStipule()

Mimosa_pseudosepiaria.leaf = new Leaf()
Mimosa_pseudosepiaria.leaf.petiole = new Petiole()
Mimosa_pseudosepiaria.leaf.bipinnate = new Bipinnate()
Mimosa_pseudosepiaria.leaf.bipinnate.rachis = new Rachis()
Mimosa_pseudosepiaria.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pseudosepiaria.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pseudosepiaria.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(4)
Mimosa_pseudosepiaria.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 9)
Mimosa_pseudosepiaria.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pseudosepiaria.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pseudosepiaria.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pseudosepiaria.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(12)
Mimosa_pseudosepiaria.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(14, 2)
Mimosa_pseudosepiaria.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(23)
Mimosa_pseudosepiaria.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pseudosepiaria.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pseudosepiaria.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pseudosepiaria.inflorescence = new Inflorescence()
Mimosa_pseudosepiaria.inflorescence.peduncle = new Peduncle()
Mimosa_pseudosepiaria.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pseudosepiaria.flower = new Flower()
Mimosa_pseudosepiaria.flower.bracteole = new Bracteole()
Mimosa_pseudosepiaria.flower.merism = ['4-merous', '5-merous']
Mimosa_pseudosepiaria.flower.calyx = new Calyx()
Mimosa_pseudosepiaria.flower.calyx.shape = 'campanulate'
Mimosa_pseudosepiaria.flower.corolla = new Corolla()
Mimosa_pseudosepiaria.flower.corolla.shape = 'funnelform'

Mimosa_pseudosepiaria.androecium = new Androecium()
Mimosa_pseudosepiaria.androecium.filaments = new Filaments()
Mimosa_pseudosepiaria.androecium.filaments.colour = 'whitenish'

Mimosa_pseudosepiaria.ginoecium = new Ginoecium()
Mimosa_pseudosepiaria.ginoecium.ovary = new Ovary()

Mimosa_pseudosepiaria.fruit = new Fruit()
Mimosa_pseudosepiaria.fruit.stipe = new Stipe()
Mimosa_pseudosepiaria.fruit.replum = new Replum()
Mimosa_pseudosepiaria.fruit.epicarp = new Epicarp()

Mimosa_pseudosepiaria.seed = new Seed()


// Description authorship
Mimosa_pseudosepiaria.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pseudosepiaria.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa pseudosepiaria
export { Mimosa_pseudosepiaria }